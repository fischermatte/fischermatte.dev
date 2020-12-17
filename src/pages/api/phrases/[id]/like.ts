import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../shared/phrase.types'
import {ErrorResponseBody} from '../../../../shared/common.types'

export default async function like(
  req: NextApiRequest,
  res: NextApiResponse<Pick<Phrase, 'totalLikes'> | ErrorResponseBody>,
): Promise<void> {
  const totalLikes: number = parseInt(req.body.totalLikes)
  try {
    res.status(200).json({totalLikes: totalLikes + 1})
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
