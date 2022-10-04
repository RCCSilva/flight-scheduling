import { Prisma } from '@prisma/client'
import { prismaClient } from '~/infrastructure/prisma'
import { excludeField } from '~/utils/exclude-field'
import { CreateUser } from '../types/user'

const createUser = async ({ email, name, password }: CreateUser) => {
  const user = await prismaClient.user.create({
    data: { email, name, password },
  })

  return excludeField(user, 'password')
}

const getUser = async (
  where: Prisma.UserWhereInput,
  select?: Omit<Prisma.UserSelect, 'password'>
) => {
  return await prismaClient.user.findFirst({ where, select })
}

const getUserWithPassword = async (where: Prisma.UserWhereInput) => {
  return await prismaClient.user.findFirst({
    where,
    select: { id: true, email: true, name: true, password: true },
  })
}

export default {
  createUser,
  getUser,
  getUserWithPassword,
}
