import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Flight from 'templates/Flight'
import protectedRoutes from 'utils/protected-routes'

const FlightPage: NextPage = () => {
  const router = useRouter()
  const { flightId } = router.query

  useEffect(() => {
    if (isNaN(Number(flightId))) {
      router.push('/')
    }
  }, [flightId, router])

  return <Flight flightId={flightId as unknown as number} />
}

export default FlightPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)

  return {
    props: {},
  }
}
