import { BadResult, Result } from '~/types/result'
import userRepository from '../domain/repositories/user-repository'
import passwordService from '../domain/services/password-service'
import tokenService from '../domain/services/token-service'
import { UserModel } from '../domain/types/user'

type LoginUserProps = {
  email: string
  password: string
}

const genericLoginFailure: BadResult = {
  isOk: false,
  statusCode: 401,
  messages: [{ message: 'Failed to login with given email and password' }],
}

export const loginUser = async ({
  email,
  password,
}: LoginUserProps): Promise<Result<UserModel & { jwt: string }>> => {
  try {
    const maybeUser = await userRepository.getUserWithPassword({ email })

    if (!maybeUser) {
      return genericLoginFailure
    }

    const { id, name, password: storedPassword } = maybeUser

    const passwordMatch = await passwordService.compareTo(
      storedPassword,
      password
    )

    if (!passwordMatch) {
      return genericLoginFailure
    }

    return {
      isOk: true,
      data: {
        id,
        name,
        email,
        jwt: tokenService.generateToken({ id, email }),
      },
    }
  } catch (err) {
    return {
      isOk: false,
      statusCode: 400,
      messages: [{ message: 'Failed to login user' }],
    }
  }
}
