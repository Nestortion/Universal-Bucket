import ContentContainerStyled from '../Styles/ContentContainerStyled'
import Board from './Board'
import { useState } from 'react'
import Scoreboard from './Scoreboard'
import Winner from './Winner'
import Tie from './Tie'
import { ResetButton } from '../Styles/TicTacToeButton'
import { useAtom } from 'jotai'
import {
  turnAtom,
  hasWinnerAtom,
  resetScoreAtom,
  isTieAtom,
} from '../../others/jotaiTicTacToe'

function TicTacToe() {
  const [isTie] = useAtom(isTieAtom)
  const [turn] = useAtom(turnAtom)
  const [hasWinner] = useAtom(hasWinnerAtom)
  const [, setScore] = useAtom(resetScoreAtom)

  function handleClick(e) {
    setScore()
  }

  return (
    <ContentContainerStyled>
      <Scoreboard />
      <Board />
      <ResetButton onClick={handleClick}>Reset Scoreboard</ResetButton>
      {hasWinner && <Winner winner={turn ? 'O' : 'X'} />}
      {isTie && !hasWinner && <Tie />}
    </ContentContainerStyled>
  )
}

export default TicTacToe
