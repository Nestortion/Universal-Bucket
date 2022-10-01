import styled from 'styled-components'

const ScoreBoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.heading2};
  gap: 1rem;
  margin-bottom: 4rem;

  .scores {
    width: 100%;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default ScoreBoardStyled
