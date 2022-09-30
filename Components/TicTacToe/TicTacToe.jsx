import ContentContainerStyled from '../Styles/ContentContainerStyled'
import Board from './Board'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { FaRegCircle } from 'react-icons/fa'

function TicTacToe() {
  const [turn, setTurn] = useState(true)
  const [mark, setMark] = useState(<ImCross />)

  return (
    <ContentContainerStyled>
      <Board turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
    </ContentContainerStyled>
  )
}

export default TicTacToe
