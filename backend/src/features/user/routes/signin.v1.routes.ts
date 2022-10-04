/**
 * @openapi
 * /api/v1/user/signin:
 *   post:
 *     tags:
 *        - Users
 *     description: Log in an user and return corresponding JWT
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  properties:
 *                      email:
 *                        type: string
 *                      password:
 *                        type: string
 *     responses:
 *        400:
 *            description: Returns an error related to the body
 *        200:
 *            description: Returns the JWT
 */

import { Request, Response } from 'express'
import { body } from 'express-validator'

import { validateRequest } from '~/middleware/validate-request'
import { userRouter } from '.'
import userHandler from '../user-handler'

userRouter.post(
  '/api/v1/user/signin',
  body('email').isEmail(),
  body('password').notEmpty(),
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body

    const result = await userHandler.loginUser({ email, password })

    if (!result.isOk) {
      return res
        .status(result.statusCode)
        .send({ status: 'failed', messages: result.messages })
    }

    return res.status(200).json(result.data)
  }
)
