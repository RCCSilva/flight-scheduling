import { Result } from '~/types/result'
import flightRepository from '../repositories/flight-repository'
import { Aircraft } from '../types/aircraft'
import { Airport } from '../types/airport'
import { Flight } from '../types/flight'
import { Pilot } from '../types/pilot'

type ServiceCreateFlight = {
  aircraft: Aircraft
  from: Airport
  to: Airport
  pilot: Pilot
}

const createFlight = async (
  data: ServiceCreateFlight
): Promise<Result<Flight>> => {
  return flightRepository.createFlight(data)
}

export default {
  createFlight,
}
