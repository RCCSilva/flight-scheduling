import FormSignIn from 'components/FormSignIn'
import type { NextPage } from 'next'
import Auth from 'templates/Auth'

const SignInPage: NextPage = () => {
  return (
    <Auth>
      <FormSignIn />
    </Auth>
  )
}

export default SignInPage
