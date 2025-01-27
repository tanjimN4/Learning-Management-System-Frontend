

import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/loginandsignup/Login'
import SignUp from './pages/loginandsignup/SignUp'
import CoursesPage from './pages/courses/CoursesPage'
import Details from './pages/details/Details'
import Chart from './pages/chart/Chart'
import Profile from './pages/profile/Profile'
import Dashboard from './dashboard/Dashboard'
import DHome from './dashboard/DHome'
import Dcourses from './dashboard/Dcourses'
import Addcourse from './dashboard/Addcourse'


function App() {


  return (
    <>
      <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="courses" element={<CoursesPage></CoursesPage>} />
        <Route path={`details/:id`} element={<Details></Details>} />
        <Route path="chart" element={<Chart></Chart>} />
        <Route path="profile" element={<Profile></Profile>} />
      </Route>
      
      <Route path='/dashboard' element={<Dashboard/>}>
      <Route index element={<DHome></DHome>}/>
      <Route path='/dashboard/courses' element={<Dcourses></Dcourses>}/>
      <Route path='/dashboard/addcourse' element={<Addcourse></Addcourse>}/>
      </Route>

    </Routes>
    </>
  )
}

export default App
