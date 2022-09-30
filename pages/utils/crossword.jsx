import React from 'react'
import Link from 'next/link'
import Header from '../../Components/Header'
import Head from 'next/head'
function crossword() {
  return (
    <>
      <Head>
        <title>Crossword</title>
      </Head>
      <Header headerText="Crossword" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default crossword
