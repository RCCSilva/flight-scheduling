import { Flight as FlightDb } from '@prisma/client'

import { prismaClient } from '~/infrastructure/prisma'
import { GoodResult } from '~/types/result'
import { composeResults } from '~/utils/compose-results'
import { safePromise } from '~/utils/safe-promise'
import { Aircraft } from '../../types/aircraft'
import { Airport } from '../../types/airport'
import { Flight, FlightStatus } from '../../types/flight'
import { Pilot } from '../../types/pilot'

type RepositoryCreateFlight = {
  aircraft: Aircraft
  from: Airport
  to: Airport
  pilot: Pilot
}

const insertFlight = ({ aircraft, from, to, pilot }: RepositoryCreateFlight) =>
  safePromise(
    () =>
      prismaClient.flight.create({
        data: {
          pilotId: pilot.id,
          fromId: from.id,
          toId: to.id,
          aircraftId: aircraft.id,
        },
      }),
    'Failed to create the flight'
  )

const makeToFlightModel = ({
  aircraft,
  from,
  to,
  pilot,
}: RepositoryCreateFlight) => {
  return ({ id, createdAt, status }: FlightDb): GoodResult<Flight> => {
    const statusEnum = status as FlightStatus
    return {
      isOk: true,
      data: {
        id,
        createdAt,
        status: statusEnum,
        aircraft,
        from,
        to,
        pilot,
      },
    }
  }
}

export const createFlight = async (data: RepositoryCreateFlight) => {
  const toFlightModel = makeToFlightModel(data)
  return composeResults(insertFlight, toFlightModel)(data)
}
