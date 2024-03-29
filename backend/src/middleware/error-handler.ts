import { NextFunction, Response, Request } from 'express'
import { CustomError } from '~/errors/custom-error'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    })
  }

  console.error('Something went wrong', err)
  res.status(500).send({ errors: [{ message: 'Something went wrong' }] })
  next()
}
