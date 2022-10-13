import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BoardStyled from '../Styles/BoardStyled'
import Cell from './Cell'

export default function Board() {
  const [cellNum, setCellNum] = useState([])

  useEffect(() => {
    for (let i = 0; i < 81; i++) {
      setCellNum((cell) => [...cell, [i + 1]])
    }
    return () => setCellNum([])
  }, [])

  return (
    <BoardStyled size={{ width: '920px' }}>
      {cellNum.map((cell) => (
        <Cell id={cell[0]} />
      ))}
    </BoardStyled>
  )
}
