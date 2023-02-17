import {Link} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const image = click
    ? 'https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png'
    : 'https://tse4.mm.bing.net/th?id=OIP.CiVQpRyvb0Sh3xxOHgKTUwAAAA&pid=Api&P=0'

  const getClicked = () => {
    setClick(prevClick => !prevClick)
  }

  return (
    <>
      <div className="header-container">
        <div className="container1">
          <Link to="/" className="link">
            <img
              src="https://docs.edx.org/edx-docs/assets/images/logo-edx.png"
              alt="logo"
              className="image"
            />
          </Link>
          <Link to="/courses" className="link">
            <h1 className="heading">Courses</h1>
          </Link>
          <Link to="/programs" className="link">
            <h1 className="heading">Programs&Degrees</h1>
          </Link>
          <Link to="/schools" className="link">
            <h1 className="heading">Schools&partners</h1>
          </Link>
        </div>
        <div className="container2">
          <h1 className="heading">edx for business</h1>
          <div className="button-container">
            <Link to="/login" className="link">
              <button type="button" className="sign-in">
                Sign in
              </button>
            </Link>
            <Link to="/login" className="link">
              <button type="button" className="parallelogram-button">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="small-header">
        <button type="button" className="burger-icon" onClick={getClicked}>
          <img src={image} alt="burger" className="burger" />
        </button>
        <Link to="/" className="link">
          <img
            src="https://docs.edx.org/edx-docs/assets/images/logo-edx.png"
            className="main-logo"
            alt="main"
          />
        </Link>
        {click ? (
          ''
        ) : (
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.eFMDQh6CaEeUT4A-3HBVqAHaHa&pid=Api&P=0"
            alt="search"
            className="search-image"
          />
        )}
      </div>

      {click && (
        <div className="click-container">
          <div className="buttons-container">
            <Link to="/login" className="link">
              <button type="button" className="small-sign">
                Sign In
              </button>
            </Link>
            <Link to="/login" className="link">
              <button type="button" className="small-register">
                Register
              </button>
            </Link>
          </div>
          <Link to="/courses" className="link">
            <h1 className="small-heading">Courses</h1>
          </Link>
          <Link to="/programs" className="link">
            <h1 className="small-heading">Programs&Degrees</h1>
          </Link>
          <Link to="/schools" className="link">
            <h1 className="small-heading">Schools&partners</h1>
          </Link>
          <h1 className="small-heading">edx for business</h1>
        </div>
      )}
    </>
  )
}
export default Header
