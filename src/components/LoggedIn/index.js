import {useNavigate} from 'react-router-dom'

import './index.css'

const LoggedIn = () => {
  const navigate = useNavigate()

  const getLogout = () => {
    localStorage.removeItem('userDetails')
    navigate('/login')
  }

  return (
    <>
      <div className="last-container">
        <img
          src="https://docs.edx.org/edx-docs/assets/images/logo-edx.png"
          className="main-logo1"
          alt="main"
        />
        <button type="button" className="small-sign" onClick={getLogout}>
          Logout
        </button>
      </div>
      <h1>
        You are successfully logged in start your journey by registering
        interseted courses for less fee.
      </h1>
    </>
  )
}

export default LoggedIn
