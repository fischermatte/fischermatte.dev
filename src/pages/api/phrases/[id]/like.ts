import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../core/shared/phrase.types'
import {phraseRepository} from '../../../../core/server/phrase.repository'
import {ErrorResponseBody} from '../../../../core/server/error.types'

export default async function like(
  req: NextApiRequest,
  res: NextApiResponse<Pick<Phrase, 'totalLikes'> | ErrorResponseBody>,
): Promise<void> {
  try {
    const phrase = await phraseRepository.like(req.query.id as string)
    res.status(200).json({totalLikes: phrase.totalLikes})
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
