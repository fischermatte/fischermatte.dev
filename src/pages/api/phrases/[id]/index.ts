import {NextApiRequest, NextApiResponse} from 'next'
import {Phrase} from '../../../../shared/phrase.types'
import {ErrorResponseBody} from '../../../../shared/common.types'

export default async function getPhrase(
  req: NextApiRequest,
  res: NextApiResponse<Phrase | ErrorResponseBody>,
): Promise<void> {
  try {
    res.status(200).json({
      id: '1',
      totalLikes: 0,
      title: 'Awesome!',
      text: 'Seems you are interested in meaningful content.',
    })
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
