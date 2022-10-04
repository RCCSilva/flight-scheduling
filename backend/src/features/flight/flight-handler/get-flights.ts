import { Result } from '~/types/result'
import flightRepository from '../domain/repositories/flight-repository'
import { Flight } from '../domain/types/flight'

export const getFlights = async (): Promise<Result<Flight[]>> => {
  try {
    return flightRepository.getFlights()
  } catch (err) {
    return {
      isOk: false,
      statusCode: 500,
      messages: [{ message: 'Failed to get flights' }],
    }
  }
}
