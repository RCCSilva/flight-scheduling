import type { GetServerSideProps, NextPage } from 'next'
import Flights, { FlightsProps } from 'templates/Flights'
import protectedRoutes from 'utils/protected-routes'

const FlightPage: NextPage<FlightsProps> = ({ flights }) => {
  return <Flights flights={flights} />
}

export default FlightPage

export const getServerSideProps: GetServerSideProps<FlightsProps> = async (
  context
) => {
  const session = await protectedRoutes(context)
  console.log('session', session)

  const flights = [
    {
      id: '2',
      from: 'SBGR',
      to: 'SBPA',
      aircraft: 'C172 (PT-OLA)',
      duration: '02:30',
    },
    {
      id: '1',
      from: 'SBNT',
      to: 'SBBR',
      aircraft: 'C172 (PT-OLA)',
      duration: '01:30',
    },
  ]

  return {
    props: {
      flights,
    },
  }
}
