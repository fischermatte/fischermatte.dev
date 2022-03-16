import {Phrase} from '../shared/phrase.types'
import {createClient} from '@supabase/supabase-js'
import SupabaseClient from '@supabase/supabase-js/dist/main/SupabaseClient'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

class PhraseRepository {
  constructor(private db: SupabaseClient) {}

  async getById(id: string): Promise<Phrase> {
    console.info('requesting data from db...')
    const result = await this.db.from<Phrase>('phrases').select('*').eq('id', id).then()
    console.info(`received response ${JSON.stringify(result)}`)
    return result.data[0]
  }

  async like(id: string): Promise<Phrase> {
    const {totalLikes} = await this.getById(id)
    const result = await this.db
      .from<Phrase>('phrases')
      .update({totalLikes: totalLikes + 1})
      .eq('id', id)
      .then()
    return result.data[0]
  }
}

export const phraseRepository = new PhraseRepository(createClient(supabaseUrl, supabaseKey))
