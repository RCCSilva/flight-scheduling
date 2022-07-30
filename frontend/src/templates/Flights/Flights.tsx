import AppContainer from 'components/AppContainer'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Table from 'components/Table'
import Link from 'next/link'
import * as S from './Flights.styles'

const columns = [
  {
    key: 'from',
    label: 'From',
  },
  {
    key: 'to',
    label: 'To',
  },
  {
    key: 'aircraft',
    label: 'Aircraft',
  },
  {
    key: 'duration',
    label: 'Duration',
  },
]

type Flight = {
  id: string
  from: string
  to: string
  duration: string
}

export type FlightsProps = {
  flights: Flight[]
}

const Flights = ({ flights }: FlightsProps) => {
  return (
    <AppContainer>
      <S.HeaderWrapper>
        <Heading>Flights</Heading>
        <Link href="/flights/new">
          <Button as="a" size="large">
            Create
          </Button>
        </Link>
      </S.HeaderWrapper>
      <Table
        columns={columns}
        items={flights?.map((flight) => ({
          ...flight,
          href: `/flights/${flight.id}`,
        }))}
      />
    </AppContainer>
  )
}

export default Flights
