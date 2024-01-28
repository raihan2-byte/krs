// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/HomePage/Home"
import AddClassPage from "../src/AddClassPage/AddClassPage"
import ClassDetail from "./ClassDetail/ClassDetail";
import MyCourse from "./MyCourse/MyCourse";
import ClassDetailFromAddClass from "../src/ClassDetail/ClassDetailFromAdd"


function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-class" element={<AddClassPage />} />
          <Route path="/class-detail" element={<ClassDetail />} />
          <Route path="/class-details" element={<ClassDetailFromAddClass />} />

          <Route path="/my-course" element={<MyCourse />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;