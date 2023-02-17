import {Link} from 'react-router-dom'
import './index.css'

const Company = props => {
  const {company} = props
  const {id, course, imageUrl, content, courseName} = company
  return (
    <Link to={`/college/${id}`} className="link">
      <li className="li-container1">
        <img
          src="https://www.expandgh.com/wp-content/uploads/2018/01/business-team.jpg"
          alt="education"
          className="university-background"
        />
        <div className="course-details">
          <img src={imageUrl} alt="education" className="college-logo" />
          <h1 className="course-heading1">{course}</h1>
          <p className="course-para">{content}</p>
          <button type="button" className="degree-button">
            {courseName}
          </button>
        </div>
      </li>
    </Link>
  )
}
export default Company
