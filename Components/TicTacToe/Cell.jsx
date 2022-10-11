import CellStyled from '../Styles/CellStyled'
import { ImCross } from 'react-icons/im'
import { FaRegCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useAtom } from 'jotai'
import ButtonStyled from '../Styles/TicTacToeButton'
import {
  changeHasWinnerAtom,
  changeIsClickedAtom,
  changeMarkAtom,
  changeTurnAtom,
  updateScoreAtom,
  resetGameAtom,
  readIsClickedAtom,
  readHasWinnerAtom,
  readMarkAtom,
  readTurnAtom,
  readIsTieAtom,
  changeIsTieAtom,
  changeCellsAtom,
  readCellsAtom,
} from '../../others/jotaiTicTacToe'

export default function Cell({ resetButton, cellNum }) {
  const [turn] = useAtom(readTurnAtom)
  const [mark] = useAtom(readMarkAtom)
  const [isTie] = useAtom(readIsTieAtom)
  const [hasWinner] = useAtom(readHasWinnerAtom)
  const [isClicked] = useAtom(readIsClickedAtom)
  const [cells] = useAtom(readCellsAtom)

  const [, setCells] = useAtom(changeCellsAtom)
  const [, setIsTie] = useAtom(changeIsTieAtom)
  const [, setTurn] = useAtom(changeTurnAtom)
  const [, setMark] = useAtom(changeMarkAtom)
  const [, setHasWinner] = useAtom(changeHasWinnerAtom)
  const [, setScore] = useAtom(updateScoreAtom)
  const [, setIsClicked] = useAtom(changeIsClickedAtom)
  const [, gameReset] = useAtom(resetGameAtom)

  const [cellMark, setCellMark] = useState(<ImCross />)

  function tie() {
    if (
      cells.every((element) => element.includes('x') || element.includes('o'))
    ) {
      setIsTie()
    }
  }

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

    e.currentTarget.classList.add('isClicked')
    e.currentTarget.classList.remove('hover')
    e.currentTarget.classList.add('cell-marked')

    setCells(cellNum)

    console.log(cells)

    checkWinner(cells)
    tie()
  }

  function resetGameState() {
    gameReset()
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
        setHasWinner()
        setScore()
        setIsClicked()
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
      (hasWinner || isTie) && (
        <ButtonStyled onClick={resetHandle}>Play Again</ButtonStyled>
      )
    )
  }
}
