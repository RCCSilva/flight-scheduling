import {
  Aircraft as AircraftDb,
  Airport as AirportDb,
  Flight as FlightDb,
  Pilot as PilotDb,
} from '@prisma/client'

import { toAircraft } from '~/features/flight/utils/to-aircraft'
import { toAirport } from '~/features/flight/utils/to-airport'
import { toPilot } from '~/features/flight/utils/to-pilot'
import { prismaClient } from '~/infrastructure/prisma'
import { Result } from '~/types/result'
import { composeResults } from '~/utils/compose-results'
import { safePromise } from '~/utils/safe-promise'
import { Flight, FlightStatus } from '../../types/flight'

type FlightFromDb = FlightDb & {
  aircraft: AircraftDb
  pilot: PilotDb
  from: AirportDb
  to: AirportDb
}

const fetchFlights = () =>
  safePromise(
    () =>
      prismaClient.flight.findMany({
        orderBy: { id: 'desc' },
        include: { aircraft: true, pilot: true, from: true, to: true },
      }),
    'Failed to load flights'
  )

const flightDbToFlight = (flightDb: FlightFromDb[]): Result<Flight[]> => {
  const db = flightDb.map((flight) => {
    const status = flight.status as FlightStatus
    return {
      id: flight.id,
      createdAt: flight.createdAt,
      status: status,
      aircraft: toAircraft(flight.aircraft),
      pilot: toPilot(flight.pilot),
      from: toAirport(flight.from),
      to: toAirport(flight.to),
    }
  })

  return {
    isOk: true,
    data: db,
  }
}

export const getFlights = async () => {
  return composeResults(fetchFlights, flightDbToFlight)()
}
