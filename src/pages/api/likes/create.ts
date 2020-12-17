export default async function createLike(req, res): Promise<void> {
  try {
    res.status(200).json({text: 'hello'})
  } catch (e) {
    // something went wrong
    res.status(500).json({error: e.message})
  }
}
