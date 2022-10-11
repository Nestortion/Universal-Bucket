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

  // const [turn, setTurn] = useState(true)
  // const [mark, setMark] = useState(<ImCross />)
  // const [score, setScore] = useState({ x: 0, o: 0 })
  // const [hasWinner, setHasWinner] = useState(false)
  // const [reset, setReset] = useState(false)
  // const [cells, setCells] = useState([
  //   [1],
  //   [2],
  //   [3],
  //   [4],
  //   [5],
  //   [6],
  //   [7],
  //   [8],
  //   [9],
  // ])

  // useEffect(() => {
  //   setCells([[1], [2], [3], [4], [5], [6], [7], [8], [9]])
  //   setTurn(true)
  //   setMark(<ImCross />)
  //   setHasWinner(false)
  // }, [reset])

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
