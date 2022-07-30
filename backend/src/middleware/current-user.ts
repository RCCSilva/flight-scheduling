import { User } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '~/infrastructure/constants'

interface UserPayload {
  id: number
  email: string
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      currentUser: UserPayload
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.session?.jwt

  if (!token) {
    return next()
  }

  try {
    const payload = jwt.verify(token, JWT_KEY) as UserPayload
    req.currentUser = payload
  } catch (err) {
    next()
  }

  next()
}
