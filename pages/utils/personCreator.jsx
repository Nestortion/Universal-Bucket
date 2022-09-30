import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'

function personCreator() {
  return (
    <>
      <Head>
        <title>Person Creator</title>
      </Head>
      <Header headerText="Person Creator" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default personCreator
