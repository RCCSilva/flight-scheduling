import { faker } from '@faker-js/faker'
import { Airport } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'

export const fakeAirport = (props?: Partial<Airport>): Airport => {
  return {
    id: props?.id ?? faker.datatype.number(),
    icao: props?.icao ?? faker.datatype.string(4).toUpperCase(),
    name: props?.name ?? faker.company.companyName(),
  }
}
export const insertAirport = (props?: Partial<Airport>) => {
  const airport = fakeAirport(props)
  return prismaClient.airport.create({ data: { ...airport, id: undefined } })
}
