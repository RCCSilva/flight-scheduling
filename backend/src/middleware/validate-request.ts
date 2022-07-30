import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { parseValidationError } from '~/utils/parse-validation-error'

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'failed',
      messages: parseValidationError(errors.array()),
    })
  }

  next()
}
