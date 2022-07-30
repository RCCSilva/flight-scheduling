import Button from 'components/Button'
import FieldText from 'components/FieldText'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEventHandler, useState } from 'react'
import * as S from './FormSignIn.styles'

const FormSignIn = () => {
  const router = useRouter()
  const [values, setValues] = useState({ email: '', password: '' })

  const handleInput = (field: 'email' | 'password', value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await signIn('credentials', {
      ...values,
      redirect: false,
    })

    if (typeof router.query.callbackUrl === 'string') {
      router.push(router.query.callbackUrl)
    } else {
      router.push('/')
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <FieldText
        label="E-mail"
        name="email"
        onInputChange={(v) => handleInput('email', v)}
      />
      <FieldText
        label="Password"
        name="password"
        type="password"
        onInputChange={(v) => handleInput('password', v)}
      />
      <Button type="submit" size="large" fullWidth>
        Sign in
      </Button>
    </S.Wrapper>
  )
}

export default FormSignIn
