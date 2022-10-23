import FormStyled from '../Styles/FormStyled'
import { FaUser } from 'react-icons/fa'

export default function Form() {
  return (
    <FormStyled>
      <form>
        <div className="header">
          <strong>Create a Person!</strong>
        </div>
        <div className="profile-pic">
          <div className="img">
            <FaUser />
          </div>
          <button className="button upload">Upload Picture</button>
        </div>
        <div className="text-container">
          <div>
            <span>Name</span>
            <input type="text" id="name" />
          </div>
          <div>
            <span>Age</span>
            <input type="text" id="age" />
          </div>
          <div>
            <span>Nationality</span>
            <input type="text" id="nationality" />
          </div>
          <div>
            <span>Motto</span>
            <input type="text" id="motto" />
          </div>
        </div>

        <button className="button submit">Submit</button>
      </form>
    </FormStyled>
  )
}
