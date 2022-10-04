import { faker } from '@faker-js/faker'
import { Flight, FlightStatus } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'
import { insertAircraft } from './aircraft-builder'
import { insertAirport } from './airport-builder'
import { insertPilot } from './pilot-builder'

export const fakeFlight = (props?: Partial<Flight>): Flight => {
  return {
    id: props?.id ?? faker.datatype.number(),
    createdAt: props?.createdAt ?? faker.date.past(),
    updatedAt: props?.updatedAt ?? faker.date.past(),
    status: props?.status ?? FlightStatus.Scheduled,
    fromId: 0,
    toId: 0,
    pilotId: 0,
    aircraftId: 0,
  }
}
export const insertFlight = async (props?: Partial<Flight>) => {
  const flight = fakeFlight(props)

  flight.fromId = (await insertAirport()).id
  flight.toId = (await insertAirport()).id
  flight.pilotId = (await insertPilot()).id
  flight.aircraftId = (await insertAircraft()).id

  return prismaClient.flight.create({ data: { ...flight, id: undefined } })
}
