import React from 'react'
import Link from 'next/link'
import Header from '../../Components/Header'
import Head from 'next/head'
import TicTacToe from '../../Components/TicTacToe/TicTacToe'

function ticTacToe() {
  return (
    <>
      <Head>
        <title>TicTacToe</title>
      </Head>
      <Header headerText="Tic Tac Toe" />
      <TicTacToe />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default ticTacToe
