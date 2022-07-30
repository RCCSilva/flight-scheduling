import { faker } from '@faker-js/faker'
import { Pilot } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'

export const fakePilot = (props?: Partial<Pilot>): Pilot => {
  return {
    id: props?.id ?? faker.datatype.number(),
    name: props?.name ?? faker.name.firstName(),
    userId: props?.userId ?? null,
  }
}
export const insertPilot = (props?: Partial<Pilot>) => {
  const pilot = fakePilot(props)
  return prismaClient.pilot.create({ data: { ...pilot, id: undefined } })
}
