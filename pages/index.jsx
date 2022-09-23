import Link from 'next/link'

export default function Home({ utils }) {
  return (
    <>
      {utils.map((util) => (
        <Link key={`${util.id}`} href={`/utils/${util.id}`}>
          <a>{util.name}</a>
        </Link>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/utils')
  const utils = await res.json()

  return {
    props: { utils },
  }
}
