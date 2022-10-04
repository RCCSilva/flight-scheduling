import { Pilot as PilotDb } from '@prisma/client'
import { Pilot } from '../domain/types/pilot'

export const toPilot = (pilotDb: PilotDb): Pilot => {
  return {
    id: pilotDb.id,
    name: pilotDb.name,
  }
}
