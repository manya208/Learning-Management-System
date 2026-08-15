import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Statistics from "./components/Statistics/Statistics";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Learning from "./pages/Learning/Learning";
import Quiz from "./pages/Quiz/Quiz";
import Certificate from "./pages/Certificate/Certificate";
import Profile from "./pages/Profile/Profile";
import InstructorDashboard from "./pages/InstructorDashboard/InstructorDashboard";
import CreateCourse from "./pages/CreateCourse/CreateCourse";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>

<Route
  path="/student-dashboard"
  element={<StudentDashboard />}
/>

<Route
  path="/course/:id"
  element={<CourseDetails />}
/>

<Route
  path="/learning/:courseId"
  element={<Learning />}
/>

<Route
  path="/quiz/:courseId"
  element={<Quiz />}
/>

<Route
  path="/certificate/:courseId"
  element={<Certificate />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

<Route
  path="/instructor-dashboard"
  element={<InstructorDashboard />}
/>

<Route
  path="/instructor/create-course"
  element={<CreateCourse />}
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;