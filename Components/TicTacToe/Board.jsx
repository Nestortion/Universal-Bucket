import BoardStyled from '../Styles/BoardStyled'
import Cell from './Cell'

export default function Board({ cells, setCells }) {
  return (
    <BoardStyled>
      <Cell resetButton={true} />
      <Cell cellNum={0} />
      <Cell cellNum={1} />
      <Cell cellNum={2} />
      <Cell cellNum={3} />
      <Cell cellNum={4} />
      <Cell cellNum={5} />
      <Cell cellNum={6} />
      <Cell cellNum={7} />
      <Cell cellNum={8} />
    </BoardStyled>
  )
}
