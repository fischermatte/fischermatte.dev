import {NextApiRequest, NextApiResponse} from 'next'
import {ErrorResponseBody} from '../../../../core/server/error.types'
import {phraseRepository} from '../../../../core/server/phrase.repository'
import {Phrase} from '../../../../core/shared/phrase.types'

export default async function getPhrase(
  req: NextApiRequest,
  res: NextApiResponse<Phrase | ErrorResponseBody>,
): Promise<void> {
  try {
    const phrase = await phraseRepository.getById(req.query.id as string)
    res.status(200).json(phrase)
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
