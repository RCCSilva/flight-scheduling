/**
 * @openapi
 * /api/v1/flights:
 *   post:
 *     tags:
 *        - Flight
 *     description: Creates a flight
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  properties:
 *                      aircraftId:
 *                        type: number
 *                      fromAirportId:
 *                        type: number
 *                      toAirportId:
 *                        type: number
 *     responses:
 *        400:
 *            description: Returns an error related to the body
 *        201:
 *            description: Returns the created flight
 */

import { Request, Response } from 'express'
import { body } from 'express-validator'
import { currentUser } from '~/middleware/current-user'
import { requireAuth } from '~/middleware/require-auth'

import { validateRequest } from '~/middleware/validate-request'
import { toInt } from '~/utils/to-int'
import { flightRouter } from '.'
import flightHandler from '../flight-handler'

flightRouter.post(
  '/api/v1/flights',
  body('aircraftId').isInt({ min: 1 }),
  body('fromAirportId').isInt({ min: 1 }),
  body('toAirportId').isInt({ min: 1 }),
  currentUser,
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const user = req.currentUser!
    const { aircraftId, fromAirportId, toAirportId, pilotId } = req.body

    const result = await flightHandler.createFlight({
      userId: user.id,
      aircraftId: toInt(aircraftId),
      fromAirportId: toInt(fromAirportId),
      toAirportId: toInt(toAirportId),
      pilotId: toInt(pilotId),
    })

    if (!result.isOk) {
      return res
        .status(result.statusCode)
        .send({ status: 'failed', messages: result.messages })
    }

    return res.status(201).json(result.data)
  }
)
