import { Result } from '~/types/result'

export const makeRemoveNull = (entityName: string) => {
  return <T>(data: T | null): Result<T> => {
    if (data === null) {
      return {
        isOk: false,
        statusCode: 400,
        messages: [{ message: `${entityName} not found` }],
      }
    }

    return {
      isOk: true,
      data,
    }
  }
}
