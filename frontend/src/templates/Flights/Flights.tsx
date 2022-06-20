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

const items = [
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

const Flights = () => {
  return (
    <AppContainer>
      <S.HeaderWrapper>
        <Heading>Flights</Heading>

        <Link href="/flights/new">
          <Button as="a">Create</Button>
        </Link>
      </S.HeaderWrapper>
      <Table
        columns={columns}
        items={items.map((item) => ({ ...item, href: `/flights/${item.id}` }))}
      />
    </AppContainer>
  )
}
export default Flights
