

import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/loginandsignup/Login'
import SignUp from './pages/loginandsignup/SignUp'
import CoursesPage from './pages/courses/CoursesPage'
import Details from './pages/details/Details'


function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="courses" element={<CoursesPage></CoursesPage>} />
        <Route path="details" element={<Details></Details>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
