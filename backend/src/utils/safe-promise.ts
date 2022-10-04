import { logger } from '~/infrastructure/logger'
import { Result } from '~/types/result'
import { StatusCode } from '~/types/status-code'

export const safePromise = async <T>(
  func: () => Promise<T>,
  message: string,
  statusCode: StatusCode = 500
): Promise<Result<T>> => {
  try {
    const result = await func()

    return {
      isOk: true,
      data: result,
    }
  } catch (err) {
    logger.log({
      level: 'warn',
      message: `Promise failed to resolve: ${err}`,
    })
    return {
      isOk: false,
      statusCode: statusCode,
      messages: [{ message: message }],
    }
  }
}
