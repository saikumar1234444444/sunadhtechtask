import './index.css'

const TopCourse = props => {
  const {couple, giveTopCourse} = props
  const {course} = couple
  const getCourse = () => {
    giveTopCourse(course)
  }

  return (
    <li className="li-container2">
      <button type="button" className="course-button1" onClick={getCourse}>
        {course}
      </button>
    </li>
  )
}
export default TopCourse
