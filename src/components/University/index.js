import {Link} from 'react-router-dom'
import './index.css'

const University = props => {
  const {each} = props
  const {id, course, imageUrl, content, courseName} = each
  return (
    <Link to={`/course/${id}`} className="link">
      {' '}
      <li className="li-container1">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/2020/07/Star-education-logo-design-scaled.jpg"
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
export default University
