import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../core/shared/phrase.types'
import {phraseRepository} from '../../../../core/server/phrase.repository'
import {ErrorResponseBody} from '../../../../core/server/error.types'

export default async function incrementLikes(
  req: NextApiRequest,
  res: NextApiResponse<Phrase | ErrorResponseBody>,
): Promise<void> {
  try {
    const phrase = await phraseRepository.like(req.query.id as string)
    res.status(200).json(phrase)
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
