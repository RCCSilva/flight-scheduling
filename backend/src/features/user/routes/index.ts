import express from 'express'

const router = express.Router()

export { router as userRouter }

import './signup.v1.routes'
import './signin.v1.routes'
