import { atom } from 'jotai'
import { ImCross } from 'react-icons/im'
import { FaRegCircle } from 'react-icons/fa'

const turnAtom = atom(true)
const markAtom = atom(<ImCross />)
const scoreAtom = atom({ x: 0, o: 0 })
const hasWinnerAtom = atom(false)
// const cellsAtom = atom([[1], [2], [3], [4], [5], [6], [7], [8], [9]])
const IsClickedAtom = atom(true)

const isTieAtom = atom(false)

const changeIsTieAtom = atom(null, (get, set) => {
  set(isTieAtom, true)
})

const changeTurnAtom = atom(null, (get, set) => {
  set(turnAtom, !get(turnAtom))
})
const changeMarkAtom = atom(null, (get, set) => {
  set(markAtom, get(turnAtom) ? <ImCross /> : <FaRegCircle />)
})

const updateScoreAtom = atom(null, (get, set) => {
  set(scoreAtom, scoreSetter(get(turnAtom), get(scoreAtom)))
})

function scoreSetter(boolean, atom) {
  if (boolean) {
    atom.o++
    return atom
  } else {
    atom.x++
    return atom
  }
}

const changeHasWinnerAtom = atom(null, (get, set) => {
  set(hasWinnerAtom, !get(hasWinnerAtom))
})

const resetScoreAtom = atom(null, (get, set) => {
  set(scoreAtom, { x: 0, o: 0 })
})

const changeIsClickedAtom = atom(null, (get, set) => {
  set(IsClickedAtom, !get(IsClickedAtom))
})

const readIsTieAtom = atom((get) => get(isTieAtom))
const readMarkAtom = atom((get) => get(markAtom))
const readTurnAtom = atom((get) => get(turnAtom))
const readIsClickedAtom = atom((get) => get(IsClickedAtom))
const readHasWinnerAtom = atom((get) => get(hasWinnerAtom))
const readScoreAtom = atom((get) => get(scoreAtom))

// const updateCellsAtom = atom(null, (get, set) => {
//   set(cellsAtom, setCells(get(cellsAtom)))
// })

// function setCells(cells) {
//   let currentCells = cells

//   currentCells[cellNum] = [...currentCells[cellNum], turn ? 'x' : 'o']
//   return currentCells
// }
const resetGameAtom = atom(null, (get, set) => {
  set(turnAtom, true)
  set(markAtom, <ImCross />)
  set(hasWinnerAtom, false)
  set(IsClickedAtom, true)
  set(isTieAtom, false)
})

export {
  changeHasWinnerAtom,
  changeIsClickedAtom,
  changeMarkAtom,
  changeTurnAtom,
  updateScoreAtom,
  turnAtom,
  markAtom,
  scoreAtom,
  hasWinnerAtom,
  IsClickedAtom,
  resetGameAtom,
  resetScoreAtom,
  readIsClickedAtom,
  readMarkAtom,
  readHasWinnerAtom,
  readTurnAtom,
  readScoreAtom,
  isTieAtom,
  readIsTieAtom,
  changeIsTieAtom,
}
