import { Prisma } from '@prisma/client'

import { prismaClient } from '~/infrastructure/prisma'
import { Result } from '~/types/result'
import { composeResults } from '~/utils/compose-results'
import { makeRemoveNull } from '~/utils/remove-null'
import { safePromise } from '~/utils/safe-promise'
import { Aircraft } from '../types/aircraft'

const removeNull = makeRemoveNull('Aircraft')

const fetchAircraft = (where: Prisma.AircraftWhereInput) =>
  safePromise(
    () => prismaClient.aircraft.findFirst({ where }),
    'Failed to load aircraft from database'
  )

const getAircraft = async (
  where: Prisma.AircraftWhereInput
): Promise<Result<Aircraft>> => {
  return composeResults(fetchAircraft, removeNull)(where)
}

export default {
  getAircraft,
}
