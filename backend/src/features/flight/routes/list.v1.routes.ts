/**
 * @openapi
 * /api/v1/flights:
 *   get:
 *     tags:
 *        - Flight
 *     description: Get a list of flights
 *     responses:
 *        400:
 *            description: Returns an error related to the body
 *        200:
 *            description: Returns the list of flights
 */

import { Request, Response } from 'express'
import { currentUser } from '~/middleware/current-user'
import { requireAuth } from '~/middleware/require-auth'

import { validateRequest } from '~/middleware/validate-request'
import { toInt } from '~/utils/to-int'
import { flightRouter } from '.'
import flightHandler from '../flight-handler'

flightRouter.get(
  '/api/v1/flights',
  // currentUser,
  // requireAuth,
  async (req: Request, res: Response) => {
    const user = req.currentUser!

    const result = await flightHandler.getFlights()

    if (!result.isOk) {
      return res
        .status(result.statusCode)
        .send({ status: 'failed', messages: result.messages })
    }

    return res.status(200).json(result.data)
  }
)
