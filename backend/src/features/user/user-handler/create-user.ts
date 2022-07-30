import { Result } from '~/types/result'
import userRepository from '../domain/repositories/user-repository'
import passwordService from '../domain/services/password-service'
import { CreateUser, UserModel } from '../domain/types/user'

export const createUser = async (
  props: CreateUser
): Promise<Result<UserModel>> => {
  try {
    const anotherEmail = await userRepository.getUser(
      { email: props.email },
      { id: true }
    )

    if (anotherEmail) {
      return {
        isOk: false,
        statusCode: 400,
        messages: [{ field: 'email', message: 'E-mail already in use' }],
      }
    }

    const hashedPassword = await passwordService.toHash(props.password)
    const user = await userRepository.createUser({
      ...props,
      password: hashedPassword,
    })
    return { isOk: true, data: user }
  } catch (er) {
    return {
      isOk: false,
      statusCode: 500,
      messages: [{ message: 'Failed to create user' }],
    }
  }
}
