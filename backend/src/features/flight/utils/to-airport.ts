import { Airport as AirportDb } from '@prisma/client'
import { Airport } from '../domain/types/airport'

export const toAirport = (airportDb: AirportDb): Airport => {
  return {
    id: airportDb.id,
    name: airportDb.name,
    icao: airportDb.icao,
  }
}
