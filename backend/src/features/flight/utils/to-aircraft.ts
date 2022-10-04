import { Aircraft as AircraftDb } from '@prisma/client'
import { Aircraft } from '../domain/types/aircraft'

export const toAircraft = (aircraftDb: AircraftDb): Aircraft => {
  return {
    id: aircraftDb.id,
    register: aircraftDb.register,
  }
}
