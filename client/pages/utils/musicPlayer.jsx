import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'

function musicPlayer() {
  return (
    <>
      <Head>
        <title>Music Player</title>
      </Head>
      <Header headerText="Music Player" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default musicPlayer
