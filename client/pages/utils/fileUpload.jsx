import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'

function fileUpload() {
  return (
    <>
      <Head>
        <title>File Upload</title>
      </Head>
      <Header headerText="File Upload" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default fileUpload
