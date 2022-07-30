import 'dotenv/config'
import './infrastructure/constants'
import express, { json } from 'express'
import cookieSession from 'cookie-session'

import { NotFoundError } from './errors/not-found-error'
import { flightRouter } from './features/flight/routes'
import { userRouter } from './features/user/routes'
import { configSwagger } from './infrastructure/swagger'
import { errorHandler } from './middleware/error-handler'

const app = express()
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
)

app.use(userRouter)
app.use(flightRouter)

configSwagger(app)

app.use(() => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
