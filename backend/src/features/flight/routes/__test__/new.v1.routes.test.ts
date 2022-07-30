import { FlightStatus } from '@prisma/client'
import supertest from 'supertest'

import { app } from '~/app'
import { insertAircraft } from '~/test/data-builder/aircraft-builder'
import { insertAirport } from '~/test/data-builder/airport-builder'
import { insertPilot } from '~/test/data-builder/pilot-builder'
import { insertUser } from '~/test/data-builder/user-builder'
import { signup } from '~/test/signup'

describe('/api/v1/flights', () => {
  it('returns a 401 if no cookie is set', async () => {
    const response = await supertest(app).post('/api/v1/flights').send({})

    expect(response.statusCode).toEqual(401)
  })

  it('creates a flight if existing airport ids and aircraft id are provided', async () => {
    const user = await insertUser()

    const aircraft = await insertAircraft()
    const fromAirport = await insertAirport()
    const toAirport = await insertAirport()
    const pilot = await insertPilot({ userId: user.id })

    const response = await supertest(app)
      .post('/api/v1/flights')
      .set('Cookie', signup(user.id))
      .send({
        aircraftId: aircraft.id,
        fromAirportId: fromAirport.id,
        toAirportId: toAirport.id,
        pilotId: pilot.id,
      })

    expect(response.statusCode).toEqual(201)

    expect(response.body.status).toEqual(FlightStatus.Scheduled)
  })
})
