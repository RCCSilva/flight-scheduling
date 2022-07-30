export type UserModel = {
  id: number
  name: string
  email: string
}

export type CreateUser = Omit<UserModel, 'id'> & { password: string }
