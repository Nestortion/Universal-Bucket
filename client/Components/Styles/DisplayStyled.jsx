import styled from 'styled-components'

const DisplayStyled = styled.div`
  height: 700px;
  width: 900px;
  border: 1px solid ${({ theme }) => theme.fontPrimary};
  border-radius: 25px;
  display: flex;
  justify-content: center;
`

export default DisplayStyled
