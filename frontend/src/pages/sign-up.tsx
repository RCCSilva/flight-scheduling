import FormSignUp from 'components/FormSignUp'
import type { NextPage } from 'next'
import Auth from 'templates/Auth'

const SignUpPage: NextPage = () => {
  return (
    <Auth>
      <FormSignUp />
    </Auth>
  )
}

export default SignUpPage
