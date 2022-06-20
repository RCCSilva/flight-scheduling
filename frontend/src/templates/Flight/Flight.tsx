import AppContainer from 'components/AppContainer'
import Heading from 'components/Heading'
import * as S from './Flight.styles'

export type FlightProps = {
  flightId: number
}

const Flight = ({ flightId }: FlightProps) => {
  return (
    <AppContainer>
      <Heading>{flightId}</Heading>
    </AppContainer>
  )
}

export default Flight
