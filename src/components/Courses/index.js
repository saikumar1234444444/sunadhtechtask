import {useState} from 'react'
import Header from '../Header'

import './index.css'

const topList = [
  {
    course: 'Web development',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.xgG5cVCHQIGfzb4vU0IPVQHaE_&pid=Api&P=0',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    course: 'Web development',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.BOIvvrkpQihE8DksG1MnqQAAAA&pid=Api&P=0',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    course: 'Web development',
    imageUrl:
      'https://www.americanbankingnews.com/logos/cyberark-software-ltd-logo.jpg',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://brandongaille.com/wp-content/uploads/2013/07/IBM-Company-Logo.jpg',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.K-AERUBRoVVBgo7m1PaAgAHaHa&pid=Api&P=0',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://exoft.net/wp-content/uploads/2017/01/Exoft_software-development-company_logo.png',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    course: 'Machine Learning',
    imageUrl:
      'https://dcassetcdn.com/design_img/2671790/650496/650496_14479942_2671790_63a35d69_image.jpg',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
  {
    course: 'Machine Learning',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.dgpQ3Tt7OEprmOLpXJpQJQHaE8&pid=Api&P=0',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
  {
    course: 'Machine Learning',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.rxMFRPGdlQML_aFvor4O1QHaFv&pid=Api&P=0',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
]
const Courses = () => {
  const [courseSearch, setSearch] = useState('')

  const getSearched = event => {
    setSearch(event.target.value)
  }
  const filterSearchList = topList.filter(searched =>
    searched.course.toLowerCase().includes(courseSearch.toLowerCase()),
  )

  return (
    <>
      <Header />
      <div className="course-route-container">
        <div className="course-search-container">
          <h1 className="course-search-heading">Search our catalog</h1>
          <div className="search-align">
            <input
              type="search"
              placeholder="what do you want to learn?"
              className="search-input"
              onChange={getSearched}
            />

            <button type="button" className="search-button">
              Search
            </button>
          </div>
        </div>
        <ul className="course-list-container">
          {filterSearchList.map(suggestion => (
            <li className="li-search-container">
              <img
                src="https://www.expandgh.com/wp-content/uploads/2018/01/business-team.jpg"
                alt="education"
                className="university-background1"
              />
              <div className="course-details">
                <img
                  src={suggestion.imageUrl}
                  alt="education"
                  className="college-logo"
                />
                <h1 className="course-heading1">{suggestion.course}</h1>
                <p className="course-para">{suggestion.content}</p>
                <button type="button" className="degree-button">
                  {suggestion.courseName}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Courses
