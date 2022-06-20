import { PlaneAlt } from '@styled-icons/boxicons-solid/PlaneAlt'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './Sidebar.styles'

const Sidebar = () => (
  <S.Wrapper>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>

    <h2>Menu</h2>

    <S.Options>
      <Link href="/flights">
        <S.Option role="link">
          <PlaneAlt />
          Flights
        </S.Option>
      </Link>
    </S.Options>
  </S.Wrapper>
)

export default Sidebar
