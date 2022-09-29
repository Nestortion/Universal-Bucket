import React from 'react'
import { HeaderStyled } from './Styles/HeaderStyled'

function Header() {
  return (
    <HeaderStyled>
      <span className="primary">Welcome to the&nbsp;</span>
      <span className="secondary">Universal Bucket</span>
    </HeaderStyled>
  )
}

export default Header
