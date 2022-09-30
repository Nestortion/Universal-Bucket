import CellStyled from '../Styles/CellStyled'
import { ImCross } from 'react-icons/im'
import { FaRegCircle } from 'react-icons/fa'
import { useState } from 'react'

export default function Cell({ turn, setTurn, mark, setMark }) {
  const [isClicked, setIsClicked] = useState(true)

  const [cellMark, setCellMark] = useState(<ImCross />)

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
    if (isClicked) {
      e.currentTarget.classList.add('isClicked')
      e.currentTarget.classList.remove('hover')
      setIsClicked(false)
    }
    e.currentTarget.classList.add('cell-marked')
    console.log(turn)
  }
  return (
    <CellStyled>
      <div className="mark hover" onClick={isClicked ? clickHandle : null}>
        {cellMark}
        {mark}
      </div>
    </CellStyled>
  )
}
