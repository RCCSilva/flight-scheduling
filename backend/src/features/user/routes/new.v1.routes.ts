/**
 * @openapi
 * /api/v1/user:
 *   post:
 *     tags:
 *        - Users
 *     description: Creates an user
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  properties:
 *                      name:
 *                        type: string
 *                      email:
 *                        type: string
 *                      password:
 *                        type: string
 *     responses:
 *        400:
 *            description: Returns an error related to the body
 *        201:
 *            description: Returns the created user
 */

import { Request, Response } from 'express'
import { body } from 'express-validator'

import { validateRequest } from '~/middleware/validate-request'
import { userRouter } from '.'
import userHandler from '../user-handler'

userRouter.post(
  '/api/v1/user',
  body('name')
    .isLength({ min: 1, max: 32 })
    .withMessage('Name must be between 1 and 32 characters'),
  body('email').isEmail(),
  body('password')
    .isLength({ min: 8, max: 64 })
    .withMessage('Password must be between 8 and 64 characters'),
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const result = await userHandler.createUser({ name, email, password })

    if (!result.isOk) {
      return res
        .status(result.statusCode)
        .send({ status: 'failed', messages: result.messages })
    }

    return res.status(201).json(result.data)
  }
)
