import { ValidationError } from 'express-validator'
import { ErrorMessage } from '~/types/result'

export const parseValidationError = (
  errors: ValidationError[]
): ErrorMessage[] => {
  return errors.map((error) => ({
    message: error.msg,
    field: error.param,
  }))
}
