import {NextApiRequest, NextApiResponse} from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify([{name: 'A'}, {name: 'B'}, {name: 'C'}]))
}
