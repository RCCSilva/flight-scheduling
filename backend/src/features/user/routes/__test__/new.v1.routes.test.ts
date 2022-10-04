import supertest from 'supertest'
import { faker } from '@faker-js/faker'
import { app } from '~/app'

describe('/api/v1/user/signup', () => {
  it('returns bad request if no body params are not set', async () => {
    const response = await supertest(app).post('/api/v1/user/signup').send({})

    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual({
      status: 'failed',
      messages: [
        { field: 'name', message: 'Name must be between 1 and 32 characters' },
        { field: 'email', message: 'Invalid value' },
        {
          field: 'password',
          message: 'Password must be between 8 and 64 characters',
        },
      ],
    })
  })

  it('returns 201 if user is successfully created', async () => {
    const data = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: 'Password!23',
    }
    const response = await supertest(app).post('/api/v1/user/signup').send(data)

    expect(response.statusCode).toEqual(201)

    expect(response.body.id).not.toBeNull()
    expect(response.body.name).toEqual(data.name)
    expect(response.body.email).toEqual(data.email)
    expect(response.body.password).toBeUndefined()
  })

  it('returns 400 if email already exists', async () => {
    const data = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: 'Password!23',
    }

    await supertest(app).post('/api/v1/user/signup').send(data).expect(201)

    const response = await supertest(app).post('/api/v1/user/signup').send(data)

    expect(response.statusCode).toEqual(400)
  })
})
