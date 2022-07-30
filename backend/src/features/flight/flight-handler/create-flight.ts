import { Aircraft, Airport, Pilot } from '@prisma/client'

import { Result } from '~/types/result'
import { reduceResults } from '~/utils/reduce-results'
import aircraftRepository from '../domain/repositories/aircraft-repository'
import airportRepository from '../domain/repositories/airport-repository'
import pilotRepository from '../domain/repositories/pilot-repository'
import flightService from '../domain/services/flight-service'
import { Flight } from '../domain/types/flight'

type FunctionResult<T> = () => Promise<Result<T>>

type CreateFlightProps = {
  aircraftId: number
  fromAirportId: number
  toAirportId: number
  pilotId: number
  userId: number
}

const loadAircraft = (aircraftId: number): FunctionResult<Aircraft> => {
  return async () => {
    return aircraftRepository.getAircraft({ id: aircraftId })
  }
}

const loadAirport = (airportId: number): FunctionResult<Airport> => {
  return async () => {
    return airportRepository.getAirport({ id: airportId })
  }
}

const loadPilotFromUser = (userId: number): FunctionResult<Pilot> => {
  return async () => {
    return pilotRepository.getPilot({ userId })
  }
}

export const createFlight = async ({
  aircraftId,
  fromAirportId,
  toAirportId,
  userId,
}: CreateFlightProps): Promise<Result<Flight>> => {
  try {
    const validationResults = await reduceResults(
      loadAircraft(aircraftId),
      loadAirport(fromAirportId),
      loadAirport(toAirportId),
      loadPilotFromUser(userId)
    )

    if (!validationResults.isOk) {
      return validationResults
    }

    const {
      data: [aircraft, from, to, pilot],
    } = validationResults

    return flightService.createFlight({
      aircraft,
      from,
      to,
      pilot,
    })
  } catch (err) {
    return {
      isOk: false,
      statusCode: 500,
      messages: [{ message: 'Failed to create flight' }],
    }
  }
}
