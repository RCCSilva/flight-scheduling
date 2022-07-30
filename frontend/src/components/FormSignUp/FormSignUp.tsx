import Button from 'components/Button'
import FieldText from 'components/FieldText'
import { useState } from 'react'
import * as S from './FormSignUp.styles'

export type FormSignUpProps = {}

const FormSignUp = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInput = (
    field: keyof typeof values | 'confirmPassword',
    value: string
  ) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <S.Wrapper>
      <FieldText
        label="Username"
        type="text"
        name="username"
        onInputChange={(v) => handleInput('username', v)}
      />
      <FieldText
        label="E-mail"
        type="text"
        name="email"
        onInputChange={(v) => handleInput('username', v)}
      />
      <FieldText
        label="Password"
        type="password"
        name="password"
        onInputChange={(v) => handleInput('password', v)}
      />
      <FieldText
        label="Confirm password"
        type="password"
        name="confirm_password"
        onInputChange={(v) => handleInput('confirmPassword', v)}
      />

      <Button type="submit" size="large" fullWidth>
        Sign Up
      </Button>
    </S.Wrapper>
  )
}

export default FormSignUp
