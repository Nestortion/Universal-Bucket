import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema.js'
// import connection from './config/db.js'
// import ConnectDB from './config/db.js'

const port = process.env.PORT
const app = express()

// connection
//   .initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization:', err)
//   })

// ConnectDB()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
