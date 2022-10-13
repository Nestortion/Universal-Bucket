import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'

function rockPaperScissors() {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <Header headerText="Rock Paper Scissors" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default rockPaperScissors
