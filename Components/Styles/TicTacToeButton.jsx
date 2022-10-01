import styled from 'styled-components'

const ButtonStyled = styled.button`
  position: absolute;
  top: -5rem;
  width: 200px;
  padding: 1rem;
  font-size: ${({ theme }) => theme.heading2};
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.fontPrimary};
  border-radius: 25px;
  transition: 1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.fontSecondary};
    scale: 1.5;
    transform: translateY(-10%);
  }
`

export const ResetButton = styled.button`
  padding-inline: 1rem;
  font-size: ${({ theme }) => theme.heading2};
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.fontPrimary};
  border-radius: 25px;
  transition: 1s ease-in-out;
  /* margin-top: 2rem; */

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.fontSecondary};
    scale: 1.5;
    transform: translateY(-10%);
  }
`

export default ButtonStyled
