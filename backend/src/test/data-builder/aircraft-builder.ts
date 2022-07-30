import { faker } from '@faker-js/faker'
import { Aircraft } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'

export const fakeAircraft = (props?: Partial<Aircraft>): Aircraft => {
  return {
    id: props?.id ?? faker.datatype.number(),
    register: props?.register ?? faker.datatype.string(16).toUpperCase(),
  }
}

export const insertAircraft = (props?: Partial<Aircraft>) => {
  const aircraft = fakeAircraft(props)
  return prismaClient.aircraft.create({ data: { ...aircraft, id: undefined } })
}
