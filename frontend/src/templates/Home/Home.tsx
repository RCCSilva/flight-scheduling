import AppContainer from 'components/AppContainer'
import { useSession } from 'next-auth/react'
import * as S from './Home.styles'

const Home = () => {
  const { data: session } = useSession()
  return <AppContainer>{session?.user?.email}</AppContainer>
}

export default Home
