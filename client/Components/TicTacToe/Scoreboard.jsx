import { FaRegCircle } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import ScoreBoardStyled from '../Styles/ScoreBoardStyled'
import { readScoreAtom } from '../../others/jotaiTicTacToe'
import { useAtom } from 'jotai'

export default function Scoreboard() {
  const [score] = useAtom(readScoreAtom)
  return (
    <ScoreBoardStyled>
      <div className="Header">Scoreboard</div>
      <div className="scores">
        <div className="x">
          <ImCross /> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;{score.x}
        </div>
        <div className="o">
          <FaRegCircle /> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;{score.o}
        </div>
      </div>
    </ScoreBoardStyled>
  )
}
