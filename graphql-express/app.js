import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'
import { userSchema } from './src/schemas/user.schema.js'
import { userResolvers } from './src/resolvers/user.resolver.js'
import { connectDB } from './src/config/connectDB.js'
import { errRes } from './src/helpers/sendResponse.js'
import { CustomError, httpStatusCodes } from './src/constants/constants.js'

const app = express();
const PORT = process.env.PORT || 3030;

app.all(
  "/graphql",
  createHandler({
    schema: userSchema,
    rootValue: userResolvers
  })
);

app.use("*", (req, res, next) => {
  next(new CustomError(httpStatusCodes['Not Found'], 'Not found'))
})

app.use(errRes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Running graphql API server at http://localhost:${PORT}`)
})