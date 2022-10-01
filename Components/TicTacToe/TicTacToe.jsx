import ContentContainerStyled from '../Styles/ContentContainerStyled'
import Board from './Board'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import Scoreboard from './Scoreboard'
import Winner from './Winner'
import { ResetButton } from '../Styles/TicTacToeButton'

function TicTacToe() {
  const [turn, setTurn] = useState(true)
  const [mark, setMark] = useState(<ImCross />)
  const [score, setScore] = useState({ x: 0, o: 0 })
  const [hasWinner, setHasWinner] = useState(false)
  const [reset, setReset] = useState(false)
  const [cells, setCells] = useState([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
  ])

  // useEffect(() => {
  //   setCells([[1], [2], [3], [4], [5], [6], [7], [8], [9]])
  //   setTurn(true)
  //   setMark(<ImCross />)
  //   setHasWinner(false)
  // }, [reset])

  function handleClick(e) {
    setScore({ x: 0, o: 0 })
  }

  return (
    <ContentContainerStyled>
      <Scoreboard score={score} />
      <Board
        turn={turn}
        setTurn={setTurn}
        mark={mark}
        setMark={setMark}
        setCells={setCells}
        cells={cells}
        setHasWinner={setHasWinner}
        setScore={setScore}
        score={score}
        reset={reset}
        hasWinner={hasWinner}
        setReset={setReset}
      />
      <ResetButton onClick={handleClick}>Reset Scoreboard</ResetButton>
      {hasWinner && <Winner winner={turn ? 'O' : 'X'} />}
    </ContentContainerStyled>
  )
}

export default TicTacToe
