import {Phrase} from '../shared/phrase.types'
import * as faunadb from 'faunadb'

const q = faunadb.query

class PhraseRepository {
  constructor(private faunaClient: faunadb.Client) {}

  async getById(id: string): Promise<Phrase> {
    console.info('requesting data from fauna db...')
    const result: {data: Phrase} = await this.faunaClient.query(q.Get(q.Ref(q.Collection('phrases'), id)))
    console.info(`received faunadb response ${JSON.stringify(result)}`)
    return result.data
  }

  async like(id: string): Promise<Phrase> {
    const result: {data: Phrase} = await this.faunaClient.query(
      q.Update(q.Ref(q.Collection('phrases'), id), {
        data: {
          totalLikes: q.Add(1, q.Select(['data', 'totalLikes'], q.Get(q.Ref(q.Collection('phrases'), id)))),
        },
      }),
    )
    return result.data
  }
}

if (!process.env.FAUNA_SERVER_KEY) {
  console.error('missing FAUNA_SERVER_KEY')
}

export const phraseRepository = new PhraseRepository(
  new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY,
  }),
)
