import BoardStyled from '../Styles/BoardStyled'
import Cell from './Cell'

export default function Board({ turn, setTurn, mark, setMark }) {
  return (
    <BoardStyled>
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
      <Cell turn={turn} setTurn={setTurn} mark={mark} setMark={setMark} />
    </BoardStyled>
  )
}
