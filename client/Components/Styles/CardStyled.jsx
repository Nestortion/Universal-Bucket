import styled from 'styled-components'

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.heading2};
  align-items: center;
  height: 300px;
  width: 300px;
  color: ${({ theme }) => theme.fontPrimary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  text-align: center;
  justify-content: space-between;
  transition: 0.5s ease-in-out;

  & > div {
    height: 200px;
    width: 300px;
    border-radius: 0 0 25px 25px;
    overflow: hidden;
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.fontSecondary};
  }
`

export default CardStyled
