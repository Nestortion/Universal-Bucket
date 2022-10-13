import BoardStyled from '../Styles/BoardStyled.jsx'
import Cell from './Cell'

export default function Board() {
  return (
    <BoardStyled size={{ width: '1000px', gap: '25px' }}>
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
