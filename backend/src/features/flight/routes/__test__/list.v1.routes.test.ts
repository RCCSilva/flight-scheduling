import supertest from 'supertest'
import { app } from '~/app'

describe('GET /api/v1/flights', () => {
  const endpoint = '/api/v1/flights'

  it('returns a list of flights', async () => {
    const response = await supertest(app).get(endpoint).send()

    expect(response.statusCode).toEqual(200)
  })
})
