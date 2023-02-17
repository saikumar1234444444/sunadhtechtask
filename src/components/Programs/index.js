import {useState} from 'react'
import Header from '../Header'

import './index.css'

const collegeList = [
  {
    course: 'Web development',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.3bvtE_14dOeadekx801yUwHaHa&pid=Api&P=0',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    course: 'Web development',
    imageUrl:
      'https://www.logolynx.com/images/logolynx/d8/d8a0ae9341434ed0883e468843961fdc.gif',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    course: 'Web development',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.z7p1SoJqJ0AEzxYPvXW0KAHaF6&pid=Api&P=0',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://ranklogos.com/wp-content/uploads/2012/05/Reed-College.jpg',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.CNV2MEoEd_dbE_6n2XEongHaH6&pid=Api&P=0',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    course: 'Data science',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.H5zXwN0GkghONNOtRFL5MAHaFj&pid=Api&P=0',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    course: 'Artificial intelligence',
    imageUrl:
      'https://cdn5.vectorstock.com/i/1000x1000/70/04/university-college-logo-vector-20907004.jpg',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
  {
    course: 'Artificial intelligence',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.pl8JouVoeEzRKuD1YAWuRwHaHd&pid=Api&P=0',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
  {
    course: 'Artificial intelligence',
    imageUrl:
      'https://www.ranklogos.com/wp-content/uploads/2014/08/Baylor-University-Logo-500x500.jpg',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
]

const Programs = () => {
  const [programSearch, setProgram] = useState('')

  const getProgram = event => {
    setProgram(event.target.value)
  }
  const filterProgramList = collegeList.filter(searched =>
    searched.course.toLowerCase().includes(programSearch.toLowerCase()),
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
              onChange={getProgram}
            />
            <button type="button" className="search-button">
              Search
            </button>
          </div>
        </div>
        <ul className="course-list-container">
          {filterProgramList.map(suggestion => (
            <li className="li-search-container">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/2020/07/Star-education-logo-design-scaled.jpg"
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

export default Programs
