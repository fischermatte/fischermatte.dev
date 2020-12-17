import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../shared/phrase.types'
import {ErrorResponseBody} from '../../../../shared/common.types'
import {query as q} from 'faunadb'
import {fauna} from '../../../../utils/fauna-client'

export default async function like(
  req: NextApiRequest,
  res: NextApiResponse<Pick<Phrase, 'totalLikes'> | ErrorResponseBody>,
): Promise<void> {
  const phraseId = req.query.id
  try {
    const result: {data: Phrase} = await fauna.query(
      q.Update(q.Ref(q.Collection('phrases'), phraseId), {
        data: {
          totalLikes: q.Add(1, q.Select(['data', 'totalLikes'], q.Get(q.Ref(q.Collection('phrases'), phraseId)))),
        },
      }),
    )
    res.status(200).json({totalLikes: result.data.totalLikes})
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
