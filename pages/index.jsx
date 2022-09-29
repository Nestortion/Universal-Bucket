import Header from '../Components/Header'
import { HomeLayout } from '../Components/Layout'
import CardList from '../Components/CardList'

export default function Home({ utils }) {
  return (
    <div>
      <Header />
      <CardList utils={utils} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/utils')
  const utils = await res.json()

  return {
    props: { utils },
  }
}

Home.getLayout = HomeLayout
