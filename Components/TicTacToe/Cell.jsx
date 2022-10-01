import CellStyled from '../Styles/CellStyled'
import { ImCross } from 'react-icons/im'
import { FaRegCircle } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import ButtonStyled from '../Styles/TicTacToeButton'

export default function Cell({
  turn,
  setTurn,
  mark,
  setMark,
  cellNum,
  setCells,
  cells,
  setHasWinner,
  setScore,
  score,
  resetButton,
  hasWinner,
  isClicked,
  setIsClicked,
}) {
  const [cellMark, setCellMark] = useState(<ImCross />)
  const [isCellClicked, setIsCellClicked] = useState(isClicked)

  // const ref = useRef(null)

  // const cellDiv = ref

  // useEffect(() => {
  //   setIsClicked(true)
  //   setCellMark(<ImCross />)
  //   cellDiv.current.classList.add('hover')
  //   cellDiv.current.classList.remove('isClicked')
  //   cellDiv.current.classList.remove('cell-marked')
  // }, [reset])

  function clickHandle(e) {
    e.preventDefault()

    setTurn(!turn)
    if (turn) {
      setCellMark(<ImCross />)
      setMark(<FaRegCircle />)
    } else {
      setCellMark(<FaRegCircle />)
      setMark(<ImCross />)
    }
    if (isCellClicked) {
      e.currentTarget.classList.add('isClicked')
      e.currentTarget.classList.remove('hover')
      setIsCellClicked(false)
    }
    e.currentTarget.classList.add('cell-marked')

    let currentCells = cells

    currentCells[cellNum] = [...currentCells[cellNum], turn ? 'x' : 'o']

    setCells(currentCells)
    checkWinner(cells)
  }

  function resetGameState() {
    setCells([[1], [2], [3], [4], [5], [6], [7], [8], [9]])
    setMark(<ImCross />)
    setTurn(true)
    setHasWinner(false)
    setIsClicked(true)
  }

  function resetHandle(e) {
    e.preventDefault()

    resetGameState()
    Array.from(e.currentTarget.parentNode.children).forEach((child) => {
      if (child.children) {
        Array.from(child.children).forEach((children) => {
          children.classList.add('hover')
          children.classList.remove('isClicked')
          children.classList.remove('cell-marked')
        })
      }
    })
    setIsClicked(true)
  }

  function checkWinner(cells) {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningCombination.forEach((combination) => {
      if (
        !cells[combination[0]][1] ||
        !cells[combination[1]][1] ||
        !cells[combination[1]][1]
      ) {
      } else if (
        cells[combination[0]][1] === cells[combination[1]][1] &&
        cells[combination[1]][1] === cells[combination[2]][1]
      ) {
        setHasWinner(true)

        let gameScore = score

        if (turn) {
          gameScore.x++
        } else {
          gameScore.o++
        }
        setScore(gameScore)
        setIsClicked(false)
      }
    })
  }

  if (!resetButton) {
    return (
      <CellStyled>
        <div className="mark hover" onClick={isClicked ? clickHandle : null}>
          {cellMark}
          {mark}
        </div>
      </CellStyled>
    )
  } else {
    return (
      hasWinner && (
        <ButtonStyled onClick={resetHandle}> Play Again</ButtonStyled>
      )
    )
  }
}
