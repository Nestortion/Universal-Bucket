import React from 'react'
import CellStyled from '../Styles/CellStyled'

export default function Cell({ id }) {
  return (
    <CellStyled size={{ width: '100px', height: '100px' }}>{id}</CellStyled>
  )
}
