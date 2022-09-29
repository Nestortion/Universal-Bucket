import Link from 'next/link'
import Card from './Card'
import CardListStyled from './Styles/CardListStyled'

function CardList({ utils }) {
  return (
    <CardListStyled>
      {utils.map((util) => (
        <Link key={`${util.id}`} href={`/utils/${util.id}`}>
          <a>
            <Card util={util} />
          </a>
        </Link>
      ))}
    </CardListStyled>
  )
}

export default CardList
