import { PlaneAlt } from '@styled-icons/boxicons-solid/PlaneAlt'
import Button from 'components/Button'
import Logo from 'components/Logo'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import * as S from './Sidebar.styles'

const Sidebar = () => {
  const session = useSession()

  const optionModifier = {
    authenticated: () => (
      <div>
        <S.Options>
          <Link href="/flights">
            <S.Option role="link">
              <PlaneAlt />
              Flights
            </S.Option>
          </Link>
        </S.Options>
        <Button onClick={() => signOut()}>Sign out</Button>,
      </div>
    ),
    unauthenticated: () => (
      <div>
        <Link href="/sign-in">
          <Button as="a">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button as="a">Sign Up</Button>
        </Link>
      </div>
    ),
    loading: () => null,
  }

  return (
    <S.Wrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      {optionModifier[session.status]()}
    </S.Wrapper>
  )
}
export default Sidebar
