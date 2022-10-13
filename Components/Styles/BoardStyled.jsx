import styled from 'styled-components'

const BoardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ size }) => size.width};
  gap: ${({ size }) => (size.gap ? size.gap : 0)};
  justify-content: center;
  position: relative;
  margin-top: 3rem;
`

export default BoardStyled
