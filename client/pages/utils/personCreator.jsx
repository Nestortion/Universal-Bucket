import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'
import PersonCreator from '../../Components/PersonCreator/PersonCreator'

function personCreator() {
  return (
    <>
      <Head>
        <title>Person Creator</title>
      </Head>
      <Header headerText="Person Creator" />
      <PersonCreator />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default personCreator
