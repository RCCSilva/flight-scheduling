import jwt from 'jsonwebtoken'
import { JWT_KEY } from '~/infrastructure/constants'

type GenerateTokenProps = {
  id: number
  email: string
}
const generateToken = ({ id, email }: GenerateTokenProps) => {
  return jwt.sign({ id, email }, JWT_KEY)
}

export default {
  generateToken,
}
