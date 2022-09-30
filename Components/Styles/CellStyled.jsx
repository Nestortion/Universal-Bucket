import styled, { ThemeContext } from 'styled-components'

const CellStyled = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.fontSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  .mark {
    height: 100%;
    width: 100%;
    font-size: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg:first-child {
      display: none;
    }
    svg:last-child {
      position: absolute;
      display: none;
    }
  }
  .hover {
    &:hover {
      cursor: pointer;
      svg:first-child {
        display: none;
      }
      svg:last-child {
        display: block;
        opacity: 0.3;
      }
    }
  }

  .cell-marked {
    svg:first-child {
      display: block;
    }
  }

  .isClicked {
    &:hover {
      cursor: not-allowed;
    }
  }
`

export default CellStyled
