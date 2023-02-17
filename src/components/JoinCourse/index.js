import {useParams} from 'react-router-dom'
import './index.css'

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

const JoinCourse = () => {
  const {id} = useParams()
  console.log(id)
  const filterUniversity = collegeList.filter(singer => singer.id === id)

  return (
    <div className="ul-join-container">
      <img
        src={filterUniversity[0].imageUrl}
        alt="education"
        className="college-logo"
      />
      <h1 className="course-heading1">{filterUniversity[0].course}</h1>
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
export default JoinCourse
