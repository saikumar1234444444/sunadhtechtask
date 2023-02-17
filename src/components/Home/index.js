import {Component} from 'react'
import Course from '../Course'
import University from '../University'
import TopCourse from '../TopCourse'
import Company from '../Company'
import Header from '../Header'

import './index.css'

const list = [
  'sai',
  'https://tse3.mm.bing.net/th?id=OIP.l8EUIdxi3-0OHFKf3Gp03wAAAA&pid=Api&P=0',
  'https://tse1.mm.bing.net/th?id=OIP._-hU4eCPP2Db7b3cvf5trwDjES&pid=Api&P=0',
  'https://tse1.mm.bing.net/th?id=OIP.VbK8rBxXjY0RvAu9fmoV2wAAAA&pid=Api&P=0',
  'https://tse3.mm.bing.net/th?id=OIP.KaxbdcECqajd0YzcLjZqXAHaHv&pid=Api&P=0',
  'https://logos-download.com/wp-content/uploads/2019/06/Regis_University_Logo_2.png',
  'https://www.furman.edu/wp-content/uploads/sites/54/2019/02/Paladins-Logo-CMYK-3.jpg',
]

const courseList = [
  {course: 'Web development'},
  {course: 'Data science'},
  {course: 'Artificial intelligence'},
]

const collegeList = [
  {
    id: '1',
    course: 'Web development',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.3bvtE_14dOeadekx801yUwHaHa&pid=Api&P=0',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    id: '2',
    course: 'Web development',
    imageUrl:
      'https://www.logolynx.com/images/logolynx/d8/d8a0ae9341434ed0883e468843961fdc.gif',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    id: '3',
    course: 'Web development',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.z7p1SoJqJ0AEzxYPvXW0KAHaF6&pid=Api&P=0',
    content: 'Online master degree in web development',
    courseName: 'Masters degree',
  },
  {
    id: '4',
    course: 'Data science',
    imageUrl:
      'https://ranklogos.com/wp-content/uploads/2012/05/Reed-College.jpg',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    id: '5',
    course: 'Data science',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.CNV2MEoEd_dbE_6n2XEongHaH6&pid=Api&P=0',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    id: '6',
    course: 'Data science',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.H5zXwN0GkghONNOtRFL5MAHaFj&pid=Api&P=0',
    content: 'Online master degree in data science',
    courseName: 'Masters degree',
  },
  {
    id: '7',
    course: 'Artificial intelligence',
    imageUrl:
      'https://cdn5.vectorstock.com/i/1000x1000/70/04/university-college-logo-vector-20907004.jpg',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
  {
    id: '8',
    course: 'Artificial intelligence',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.pl8JouVoeEzRKuD1YAWuRwHaHd&pid=Api&P=0',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
  {
    id: '9',
    course: 'Artificial intelligence',
    imageUrl:
      'https://www.ranklogos.com/wp-content/uploads/2014/08/Baylor-University-Logo-500x500.jpg',
    content: 'Online master degree in artificial intelligence',
    courseName: 'Masters degree',
  },
]

const topList = [
  {
    id: '10',
    course: 'Web development',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.xgG5cVCHQIGfzb4vU0IPVQHaE_&pid=Api&P=0',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    id: '11',
    course: 'Web development',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.BOIvvrkpQihE8DksG1MnqQAAAA&pid=Api&P=0',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    id: '12',
    course: 'Web development',
    imageUrl:
      'https://www.americanbankingnews.com/logos/cyberark-software-ltd-logo.jpg',
    content: 'Introduction to web development',
    courseName: 'Course',
  },
  {
    id: '13',
    course: 'Data science',
    imageUrl:
      'https://brandongaille.com/wp-content/uploads/2013/07/IBM-Company-Logo.jpg',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    id: '14',
    course: 'Data science',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.K-AERUBRoVVBgo7m1PaAgAHaHa&pid=Api&P=0',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    id: '15',
    course: 'Data science',
    imageUrl:
      'https://exoft.net/wp-content/uploads/2017/01/Exoft_software-development-company_logo.png',
    content: 'Introduction to data science',
    courseName: 'Course',
  },
  {
    id: '16',
    course: 'Machine Learning',
    imageUrl:
      'https://dcassetcdn.com/design_img/2671790/650496/650496_14479942_2671790_63a35d69_image.jpg',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
  {
    id: '17',
    course: 'Machine Learning',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.dgpQ3Tt7OEprmOLpXJpQJQHaE8&pid=Api&P=0',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
  {
    id: '18',
    course: 'Machine Learning',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.rxMFRPGdlQML_aFvor4O1QHaFv&pid=Api&P=0',
    content: 'Introduction to Machine Learning',
    courseName: 'Course',
  },
]

const topCourse = [
  {id: 19, course: 'Data science'},
  {id: 20, course: 'Machine Learning'},
  {id: 21, course: 'Web development'},
]

const suggestCourse = [
  {id: 22, course: 'Data science'},
  {id: 23, course: 'Machine Learning'},
  {id: 24, course: 'Web development'},
  {id: 25, course: 'Web development(MERN)'},
  {id: 26, course: 'Web development(MEAN)'},
  {id: 27, course: 'Data science(Data analytics)'},
  {id: 28, course: 'Machine Learning(IOT)'},
]

class Home extends Component {
  state = {
    counter: 0,
    courseName: courseList[0].course,
    topCourses: topCourse[0].course,
    search: false,
    searchResult: '',
  }

  decreaseValue = () => {
    const {counter} = this.state
    if (counter === 0) {
      this.setState({counter: 0})
    } else {
      this.setState(prevState => ({counter: prevState.counter - 3}))
    }
  }

  increaseValue = () => {
    const {counter} = this.state
    if (counter === 3) {
      this.setState({counter: 3})
    } else {
      this.setState(prevState => ({counter: prevState.counter + 3}))
    }
  }

  giveCourse = course => {
    this.setState({courseName: course})
  }

  giveTopCourse = course => {
    this.setState({topCourses: course})
  }

  giveSearch = event => {
    this.setState({searchResult: event.target.value})
    this.setState(prevState => ({search: !prevState.search}))
  }

  render() {
    const {counter, courseName, topCourses, search, searchResult} = this.state
    const filterList = collegeList.filter(every => every.course === courseName)
    const topFilteredCourses = topList.filter(
      separate => separate.course === topCourses,
    )
    const searchList = suggestCourse.filter(singer =>
      singer.course.toLowerCase().includes(searchResult.toLowerCase()),
    )
    console.log(searchList)
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="pic-container">
            <div className="text-container">
              <h1 className="intro-heading1">
                Learning is what you make of it.
              </h1>
              <h1 className="intro-heading2">Make it yours at edX</h1>
              <div>
                <input
                  type="search"
                  placeholder="search our 3000+ courses"
                  className="search-input"
                  value={searchResult}
                  onChange={this.giveSearch}
                />
                <button type="button" className="search-button">
                  Search
                </button>
                {search ? (
                  <ul className="search">
                    {searchList.map(simple => (
                      <li>{simple.course}</li>
                    ))}
                  </ul>
                ) : (
                  ''
                )}
              </div>
            </div>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.RMvDx_l12u0zoZnbK7U5YQHaHa&pid=Api&P=0"
              alt="profile-pic"
              className="profile-pic"
            />
          </div>
          <div className="university-container">
            <button
              type="button"
              onClick={this.decreaseValue}
              className="university-button"
            >
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.dX3K4QUJvby7vnIx-c7IqwHaHa&pid=Api&P=0"
                alt="college-logo"
                className="arrow"
              />
            </button>

            <img
              src={list[counter + 1]}
              alt="college-logo"
              className="university-image"
            />
            <img
              src={list[counter + 2]}
              alt="college-logo"
              className="university-image"
            />
            <img
              src={list[counter + 3]}
              alt="college-logo"
              className="university-image"
            />
            <button
              type="button"
              onClick={this.increaseValue}
              className="university-button"
            >
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.LFRiEgXLEUqcWuJxPzeL9wHaHa&pid=Api&P=0"
                alt="college-logo"
                className="arrow"
              />
            </button>
          </div>
          <div className="course-container">
            <h1 className="title">
              <span className="span">New</span> on edX
            </h1>
            <h1 className="course-heading">Masters Degree</h1>
            <ul className="ul-container">
              {courseList.map(single => (
                <Course
                  single={single}
                  giveCourse={this.giveCourse}
                  key={single.id}
                />
              ))}
            </ul>
            <ul className="ul-container1">
              {filterList.map(each => (
                <University each={each} key={each.id} />
              ))}
            </ul>
          </div>
          <div className="top-course-container">
            <h1 className="top-course-heading">Explore Top Courses</h1>
            <ul className="ul-container2">
              {topCourse.map(couple => (
                <TopCourse
                  couple={couple}
                  giveTopCourse={this.giveTopCourse}
                  key={couple.id}
                />
              ))}
            </ul>
            <ul className="ul-container1">
              {topFilteredCourses.map(company => (
                <Company company={company} key={company.id} />
              ))}
            </ul>
          </div>
          <div className="detailed-container">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922778dueuu.png"
              alt="student"
              className="student-image"
            />
            <div className="inside-text-container">
              <div className="arrow-container">
                <div className="content-container">
                  <h1 className="first-heading">FOR LEARNERS</h1>
                  <h1 className="second-heading">
                    Propel your career, get a degree, or expand your knowledge
                    at any level.
                  </h1>
                </div>
                <button type="button" className="arrow-button">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/31-512.png"
                    alt="college-logo"
                    className="arrow"
                  />
                </button>
              </div>

              <div className="arrow-container">
                <div className="content-container">
                  <h1 className="first-heading">FOR BUSINESSES</h1>
                  <h1 className="second-heading">
                    Upskill employees and build a culture of learning.
                  </h1>
                </div>
                <button type="button" className="arrow-button">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/31-512.png"
                    alt="college-logo"
                    className="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <h1 className="subject-heading">Popular subjects</h1>
          <div className="available-courses">
            <div className="shift">
              <h1 className="ul-heading">Web development</h1>
              <ul className="ul-course-container">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>sqlite</li>
              </ul>
            </div>
            <div className="shift">
              <h1 className="ul-heading">Data science</h1>
              <ul className="ul-course-container">
                <li>Python</li>
                <li>Sql</li>
                <li>Power bi</li>
                <li>Oracle</li>
                <li>Tableau</li>
              </ul>
            </div>
            <div className="shift">
              <h1 className="ul-heading">Machine Learning </h1>
              <ul className="ul-course-container">
                <li>Deep Neural Networks</li>
                <li>Deep learning</li>
                <li>IOT</li>
                <li>Augmented reality</li>
                <li>Virtual reality</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <img
              src="https://docs.edx.org/edx-docs/assets/images/logo-edx.png"
              alt="logo"
              className="company-logo"
            />
            <div className="convert">
              <div className="shift1">
                <h1 className="ul-heading1">About</h1>
                <ul className="ul-course-container1">
                  <li>Affiliates</li>
                  <li>Deep learning</li>
                  <li>Careers</li>
                  <li>News</li>
                  <li>Contact us</li>
                  <li>Help center</li>
                </ul>
              </div>
              <div className="shift1">
                <h1 className="ul-heading3">Address</h1>
                <p className="para">
                  Cyber towers,edX,3rd floor,
                  <br />
                  Hitech city,hederbad,telangana,India
                </p>
              </div>
              <div>
                <h1 className="ul-heading2">Social media</h1>
                <img
                  src="https://www.pinclipart.com/picdir/big/408-4081089_2563-x-1304-53-0-instagram-facebook-youtube.png"
                  alt="logo"
                  className="logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Home
