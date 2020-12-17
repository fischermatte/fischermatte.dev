export interface Like {
  id: string
  createdAt: Date
}

export default async function getLikes(req, res): Promise<void> {
  try {
    const likes: Like[] = [
      {
        id: '1',
        createdAt: new Date(),
      },
      {
        id: '2',
        createdAt: new Date(),
      },
      {
        id: '3',
        createdAt: new Date(),
      },
    ]
    // ok
    res.status(200).json(likes)
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
