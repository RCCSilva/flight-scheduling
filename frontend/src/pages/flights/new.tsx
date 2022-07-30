import type { GetServerSideProps, NextPage } from 'next'
import FlightsNew from 'templates/FlightsNew'
import protectedRoutes from 'utils/protected-routes'

const NewFlightPage: NextPage = () => {
  return <FlightsNew />
}

export default NewFlightPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  await protectedRoutes(context)

  return {
    props: {},
  }
}
