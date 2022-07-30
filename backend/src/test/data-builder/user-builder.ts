import { faker } from '@faker-js/faker'
import { User } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'

export const fakeUser = (props?: Partial<User>): User => {
  return {
    id: props?.id ?? faker.datatype.number(),
    email: props?.email ?? faker.datatype.string(32),
    name: props?.name ?? faker.datatype.string(32),
    password: props?.password ?? faker.datatype.string(),
  }
}

export const insertUser = (props?: Partial<User>) => {
  const user = fakeUser(props)
  return prismaClient.user.create({ data: { ...user, id: undefined } })
}
