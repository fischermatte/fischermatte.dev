import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../shared/phrase.types'
import {ErrorResponseBody} from '../../../../shared/common.types'
import {query as q} from 'faunadb'
import {fauna} from '../../../../utils/fauna-client'

export default async function getPhrase(
  req: NextApiRequest,
  res: NextApiResponse<Phrase | ErrorResponseBody>,
): Promise<void> {
  try {
    const phraseId = req.query.id
    const result: {data: Phrase} = await fauna.query(q.Get(q.Ref(q.Collection('phrases'), phraseId)))
    res.status(200).json(result.data)
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
