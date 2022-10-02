import BoardStyled from '../Styles/BoardStyled'
import Cell from './Cell'

export default function Board({ cells, setCells }) {
  return (
    <BoardStyled>
      <Cell cells={cells} setCells={setCells} resetButton={true} />
      <Cell cells={cells} setCells={setCells} cellNum={0} />
      <Cell cells={cells} setCells={setCells} cellNum={1} />
      <Cell cells={cells} setCells={setCells} cellNum={2} />
      <Cell cells={cells} setCells={setCells} cellNum={3} />
      <Cell cells={cells} setCells={setCells} cellNum={4} />
      <Cell cells={cells} setCells={setCells} cellNum={5} />
      <Cell cells={cells} setCells={setCells} cellNum={6} />
      <Cell cells={cells} setCells={setCells} cellNum={7} />
      <Cell cells={cells} setCells={setCells} cellNum={8} />
    </BoardStyled>
  )
}
