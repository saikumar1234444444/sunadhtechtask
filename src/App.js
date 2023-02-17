import {Routes, BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Courses from './components/Courses'
import Programs from './components/Programs'
import Schools from './components/Schools'
import Login from './components/Login'
import JoinCourse from './components/JoinCourse'
import JoinCollege from './components/JoinCollege'
import LoggedIn from './components/LoggedIn'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/programs" element={<Programs />} />
      <Route exact path="/schools" element={<Schools />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/course/:id" element={<JoinCourse />} />
      <Route exact path="/college/:id" element={<JoinCollege />} />
      <Route exact path="/logged" element={<LoggedIn />} />
    </Routes>
  </BrowserRouter>
)

export default App
