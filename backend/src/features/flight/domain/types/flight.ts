import { Aircraft } from './aircraft'
import { Airport } from './airport'
import { Pilot } from './pilot'

export enum FlightStatus {
  Scheduled = 'Scheduled',
  Ongoing = 'Ongoing',
  Finished = 'Finished',
}

export type Flight = {
  id: number
  createdAt: Date
  status: FlightStatus
  aircraft: Aircraft
  pilot: Pilot
  from: Airport
  to: Airport
}
