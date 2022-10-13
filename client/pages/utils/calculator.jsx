import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'
function calculator() {
  return (
    <>
      <Head>
        <title>Calculator</title>
      </Head>
      <Header headerText="Calculator" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default calculator
