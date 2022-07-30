import { StatusCode } from './status-code'

export type ErrorMessage = { message: string; field?: string }

export type GoodResult<T> = {
  isOk: true
  data: T
}

export type BadResult = {
  isOk: false
  statusCode: StatusCode
  messages: ErrorMessage[]
}

export type Result<T> = GoodResult<T> | BadResult
