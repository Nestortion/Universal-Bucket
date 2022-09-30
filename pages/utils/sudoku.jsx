import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../Components/Header'

function sudoku() {
  return (
    <>
      <Head>
        <title>Sudoku</title>
      </Head>
      <Header headerText="Sudoku" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default sudoku
