import React from 'react'
import Link from 'next/link'
import Header from '../../Components/Header'
import Head from 'next/head'

function ticTacToe() {
  return (
    <>
      <Head>
        <title>TicTacToe</title>
      </Head>
      <Header headerText="Tic Tac Toe" />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default ticTacToe
