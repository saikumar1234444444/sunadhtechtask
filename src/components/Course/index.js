import './index.css'

const Course = props => {
  const {single, giveCourse} = props
  const {course} = single

  const getName = () => {
    giveCourse(course)
  }
  return (
    <li className="li-container">
      <button type="button" className="course-button" onClick={getName}>
        {course}
      </button>
    </li>
  )
}

export default Course
