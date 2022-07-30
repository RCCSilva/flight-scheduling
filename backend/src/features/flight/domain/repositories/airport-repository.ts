import { Prisma } from '@prisma/client'

import { prismaClient } from '~/infrastructure/prisma'
import { composeResults } from '~/utils/compose-results'
import { makeRemoveNull } from '~/utils/remove-null'
import { safePromise } from '~/utils/safe-promise'

const removeNull = makeRemoveNull('Airport')

const fetchAirport = (where: Prisma.AirportWhereInput) =>
  safePromise(
    () => prismaClient.airport.findFirst({ where }),
    'Failed to load airport from database'
  )

const getAirport = async (where: Prisma.AirportWhereInput) => {
  return composeResults(fetchAirport, removeNull)(where)
}

export default {
  getAirport,
}
