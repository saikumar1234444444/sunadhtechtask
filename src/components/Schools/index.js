import Header from '../Header'
import './index.css'

const colleges = [
  {
    collegeName: 'Harvard College of Engineering and Technology',
    collegeImage:
      'https://tse3.mm.bing.net/th?id=OIP.KaxbdcECqajd0YzcLjZqXAHaHv&pid=Api&P=0',
    aboutCollege:
      'Harvest College of Engineering and Technology is a premier engineering institution located in Coimbatore.',
  },

  {
    collegeName: 'Stanford University',
    collegeImage:
      'https://www.furman.edu/wp-content/uploads/sites/54/2019/02/Paladins-Logo-CMYK-3.jpg',
    aboutCollege:
      'Stanford University is a private research university located in Stanford,California.',
  },
  {
    collegeName: 'MIT',
    collegeImage:
      'https://logos-download.com/wp-content/uploads/2019/06/Regis_University_Logo_2.png',
    aboutCollege:
      'The Massachusetts Institute of Technology (MIT) is a world-renowned private research university located in Cambridge, Massachusetts.',
  },
  {
    collegeName: 'GNI',
    collegeImage:
      'https://tse3.mm.bing.net/th?id=OIP.pjRJIp3sHSgouUOHAgKeTgAAAA&pid=Api&P=0',
    aboutCollege:
      'GNI is a world-renowned private research university located in Cambridge, Massachusetts.',
  },
  {
    collegeName: 'CMR University',
    collegeImage:
      'https://tse2.mm.bing.net/th?id=OIP.Z7pljm4dETYVnJdPUP9LDAHaHa&pid=Api&P=0',
    aboutCollege:
      'CMR University is a private research university located in Stanford,California.',
  },
]

const Schools = () => (
  <>
    <Header />
    <ul className="school-container">
      {colleges.map(school => (
        <li className="school-list-container">
          <h1 className="school-heading">{school.collegeName}</h1>
          <img
            src={school.collegeImage}
            alt="school"
            className="school-image"
          />
          <p className="school-para">{school.aboutCollege}</p>
        </li>
      ))}
    </ul>
  </>
)
export default Schools
