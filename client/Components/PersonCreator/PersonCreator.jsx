import ContentContainerStyled from '../Styles/ContentContainerStyled'
import Display from './Display'
import Form from './Form'

export default function PersonCreator() {
  return (
    <ContentContainerStyled util="personCreator">
      <Form />
      <Display />
    </ContentContainerStyled>
  )
}
