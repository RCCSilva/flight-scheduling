import { Prisma } from '@prisma/client'

import { prismaClient } from '~/infrastructure/prisma'
import { composeResults } from '~/utils/compose-results'
import { makeRemoveNull } from '~/utils/remove-null'
import { safePromise } from '~/utils/safe-promise'

const removeNull = makeRemoveNull('Pilot')

const fetchPilot = (where: Prisma.PilotWhereInput) =>
  safePromise(
    () => prismaClient.pilot.findFirst({ where }),
    'Failed to load pilot from database'
  )

const getPilot = async (where: Prisma.PilotWhereInput) => {
  return composeResults(fetchPilot, removeNull)(where)
}

export default {
  getPilot,
}
