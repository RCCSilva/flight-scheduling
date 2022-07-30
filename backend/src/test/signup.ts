import jwt from 'jsonwebtoken'
import { JWT_KEY } from '~/infrastructure/constants'

export const signup = (userId?: number) => {
  const payload = {
    id: userId ?? '1283791273',
    email: 'test@test.com',
  }
  const token = jwt.sign(payload, JWT_KEY)

  const session = { jwt: token }

  const sessionJSON = JSON.stringify(session)

  const base64 = Buffer.from(sessionJSON).toString('base64')

  return `session=${base64}; path=/; httponly`
}
