import CardStyled from './Styles/CardStyled'
import xdd from './Img/tempimage.jpg'
import Image from 'next/image'

function Card({ util }) {
  return (
    <CardStyled>
      <p>{util.name}</p>
      <div>
        <Image src={xdd} width={300} height={200} />
      </div>
    </CardStyled>
  )
}

export default Card
