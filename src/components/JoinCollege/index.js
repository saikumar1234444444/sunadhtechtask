import {useParams} from 'react-router-dom'
import './index.css'

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

const JoinCollege = () => {
  const {id} = useParams()
  console.log(id)
  const filterCourse = topList.filter(separate => separate.id === id)

  return (
    <div className="ul-join-container">
      <img
        src={filterCourse[0].imageUrl}
        alt="education"
        className="college-logo"
      />
      <h1 className="course-heading1">{filterCourse[0].course}</h1>
      <p className="course-para">
        This course will continued for 6 months,in this course all concepts will
        be taught from scratch,please enroll for it to join the course
      </p>
      <button type="button" className="degree-button">
        Enroll
      </button>
    </div>
  )
}
export default JoinCollege
