import styled from 'styled-components'

export const HeaderStyled = styled.div`
  font-size: ${({ theme }) => theme.heading1};

  .primary {
    color: ${({ theme }) => theme.fontSecondary};
  }
`
