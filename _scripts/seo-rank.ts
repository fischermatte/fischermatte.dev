import * as serp from 'serp'
import * as fs from 'fs'
import path from 'path'

interface RankItem {
  url: string
  index: number
}

interface Rank {
  ranks: RankItem[]
  firstRank: number
  host: string
}

interface SearchResultItem {
  url: string
}

function serpOptions(host: string, hl: string, gl: string): any {
  return {
    host,
    qs: {
      hl,
      gl,
      q: 'fischermatte',
      filter: 0,
      pws: 0,
    },
    num: 200,
  }
}

async function getRanks(host: string, hl: string, gl: string): Promise<Rank> {
  const items: SearchResultItem[] = await serp.search(serpOptions(host, hl, gl))
  const ranks = items
    .map((item, index) => {
      const rank: RankItem = {
        index,
        url: item.url,
      }
      return rank
    })
    .filter(rank => rank.url.indexOf('https://fischermatte.dev') >= 0)
  return {
    host,
    ranks,
    firstRank: ranks && ranks.length > 0 ? ranks[0].index : -1,
  }
}

async function search(): Promise<void> {
  const result: Rank[] = []
  result.push(await getRanks('google.de', 'de', 'de'))
  result.push(await getRanks('google.ch', 'de', 'ch'))
  result.push(await getRanks('google.com', 'en', 'us'))
  let text: string = '\r\n\r\n' + new Date().toISOString() + '\r\n'
  text += '-------------------------' + '\r\n'
  text += result.map(r => `${r.host} - Rank:${r.firstRank} => ${JSON.stringify(r.ranks)}`).join('\r\n')
  await fs.promises.appendFile(path.resolve('_scripts/seo-rank.txt'), text)
  console.log(text)
}

search()
