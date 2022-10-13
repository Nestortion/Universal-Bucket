import styled from 'styled-components'

const FormStyled = styled.div`
  width: 510px;
  height: 700px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.fontPrimary};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .button {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.fontPrimary};
  }

  .upload {
    width: 100px;
    height: 20px;
    font-size: 10px;
  }
  .submit {
    width: 105px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 3rem;
    font-weight: bold;
  }

  .header {
    font-size: ${({ theme }) => theme.heading2};
    margin-top: 2rem;
  }

  .profile-pic {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .img {
      height: 110px;
      width: 170px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 100px;
      background-color: ${({ theme }) => theme.fontPrimary};
      color: ${({ theme }) => theme.buttonColor};
      border-radius: 20px;
    }
  }
  .text-container {
    display: flex;
    gap: 18px;
    flex-direction: column;
    font-size: ${({ theme }) => theme.heading2};
    color: ${({ theme }) => theme.fontSecondary};
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > input[type='text'] {
        width: 300px;
        height: 32px;
        border-radius: 10px;
      }
    }
  }
`

export default FormStyled
