import styled from 'styled-components'

export const HeaderStyled = styled.div`
  font-size: ${({ theme }) => theme.heading1};
  display: flex;
  justify-content: center;
  padding: 3rem 0;

  .primary {
    color: ${({ theme }) => theme.fontSecondary};
  }
  .secondary {
    color: ${({ theme }) => theme.fontPrimary};
  }
  &:hover {
    cursor: default;

    .primary {
      color: ${({ theme }) => theme.fontPrimary};
    }
    .secondary {
      color: ${({ theme }) => theme.fontSecondary};
    }
  }
`
