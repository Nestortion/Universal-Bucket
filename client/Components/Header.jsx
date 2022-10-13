import React from 'react'
import { HeaderStyled } from './Styles/HeaderStyled'

function Header({ headerText }) {
  const text = `${headerText}`

  const content = text.split(' ')

  let singleWord

  if (!(content > 1)) {
    singleWord = [
      content[0].slice(0, Math.ceil(content[0].length / 2)),
      content[0].slice(Math.ceil(content[0].length / 2), content[0].length),
    ]
  }

  let color = false

  return (
    <HeaderStyled>
      <span>
        {headerText ? (
          content.length > 1 ? (
            content.map((word) => {
              color = !color
              return (
                <strong
                  key={word.toString()}
                  className={color ? 'primary' : 'secondary'}
                >
                  {word}&nbsp;
                </strong>
              )
            })
          ) : (
            singleWord.map((word) => {
              color = !color
              return (
                <strong className={color ? 'primary' : 'secondary'}>
                  {word}
                </strong>
              )
            })
          )
        ) : (
          <span>
            <strong className="primary">Welcome to the&nbsp;</strong>
            <strong className="secondary">Universal Bucket</strong>
          </span>
        )}
      </span>
    </HeaderStyled>
  )
}

export default Header
