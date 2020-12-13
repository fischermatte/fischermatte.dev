interface Like {
  createdAt: Date
}

export default async function getLikes(req, res): Promise<void> {
  try {
    const likes: Like[] = [
      {
        createdAt: new Date(),
      },
      {
        createdAt: new Date(),
      },
      {
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
