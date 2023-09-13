import * as faunadb from 'faunadb'
import {Phrase} from '../shared/phrase.types'

const q = faunadb.query

// import {createClient} from '@supabase/supabase-js'
// import SupabaseClient from '@supabase/supabase-js/dist/main/SupabaseClient'
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// class SupabasePhraseRepository {
//   constructor(private db: SupabaseClient) {}

//   async getById(id: string): Promise<Phrase> {
//     console.info('requesting data from db...')
//     const result = await this.db.from<Phrase>('phrases').select('*').eq('id', id).then()
//     console.info(`received response ${JSON.stringify(result)}`)
//     return result.data[0]
//   }

//   async like(id: string): Promise<Phrase> {
//     const {totalLikes} = await this.getById(id)
//     const result = await this.db
//       .from<Phrase>('phrases')
//       .update({totalLikes: totalLikes + 1})
//       .eq('id', id)
//       .then()
//     return result.data[0]
//   }

// }

// export const phraseRepository = new SupabasePhraseRepository(createClient(supabaseUrl, supabaseKey))

class FaunaDbPhraseRepository {
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

export const phraseRepository = new FaunaDbPhraseRepository(
  new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY,
  }),
)
