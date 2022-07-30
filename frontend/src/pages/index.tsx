import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Home from 'templates/Home'

const Index: NextPage = () => {
  return <Home />
}

export default Index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  return {
    props: {},
  }
}
