import faunadb from 'faunadb'

export const fauna = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_KEY,
})
