// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/HomePage/Home"
import AddClassPage from "../src/AddClassPage/AddClassPage"
import ClassDetail from "./ClassDetailPage/ClassDetail";
import MyCourse from "./MyCourse/MyCourse";
import ClassDetailFromAddClass from "../src/ClassDetailPage/ClassDetailFromAdd"
import Login from "./Component/Login/Login";
import StudentCenter from "./StudentCenterPage/StudentCenter";
import NewAddClassPage from "../src/NewAddClassPage/NewAddClassPage"



function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-class" element={<AddClassPage />} />
          <Route path="/class-detail" element={<ClassDetail />} />
          <Route path="/class-details" element={<ClassDetailFromAddClass />} />
          <Route path="/student-center" element={<StudentCenter/>} />
          <Route path="/my-course" element={<MyCourse />} />
          <Route path="/New-add-class" element={<NewAddClassPage/>} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;