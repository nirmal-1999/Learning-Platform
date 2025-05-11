import Courses from './components/courses/Courses.jsx';
import HomePage from './components/Home.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import ViewAllCourses from './components/courses/ViewAllCourses.jsx';


function App() {

  return (
    <Router basename='easy-learn'>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/view-course-list' element={<ViewAllCourses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
