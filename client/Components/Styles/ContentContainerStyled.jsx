import styled from 'styled-components'

const ContentContainerStyled = styled.div`
  display: flex;
  ${({ util }) =>
    util === 'personCreator'
      ? 'flex-direction:row; justify-content:center; gap:200px'
      : 'flex-direction:column; align-items: center;'}
`

export default ContentContainerStyled
