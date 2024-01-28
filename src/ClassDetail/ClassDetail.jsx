import React from "react";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";

const ClassDetail = () => {

  const courses = JSON.parse(localStorage.getItem("selectedMk"));
  // const courses1 = JSON.parse(localStorage.getItem("selectedCourse"));

  console.log(JSON.parse(localStorage.getItem("selectedMk")));
  console.log(JSON.parse(localStorage.getItem("selectedCourse")));


  // console.log(JSON.parse(localStorage.getItem("selectedCourse")));
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="text=[10px] w-1/2 my-10 m-auto">
      <a href="/add-class" className="text-blue-500">
      <p>Return to Search by My Requirement</p>
      </a>
      <div>{courses.CourseCode} - {courses.Description}</div>

      <div className="border-[0.5px] border-[#e5e1e1] p-2">
        <div className="bg-[#e5e1e1]">CourseDetail</div>
          {/* {courses?.map((item, index) =>(   */}
        <div className="w-1/2 m-auto ">
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Career</span> <span>Undergraduate</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Units</span> <span>{courses.Units}</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Graduading Basis</span>{" "}
            <span>Passing C Normal</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Course Component </span>{" "}
            <span>Lecture</span> <span>Required</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold"> Campus </span> <span>BSD CAMPUS</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Academic Group </span>{" "}
            <span>ENGINEERING</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Faculty</span> <span>ENGINEERING</span>
          </div>
        </div>
          
        <div className="bg-[#e5e1e1]">Enrollment Information</div>
        <div className="w-1/2 m-auto">
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Typically Offered </span>{" "}
            <span>Odd & Even</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="font-bold">Course Attribute </span>{" "}
            <span>Thesis Course</span>
          </div>
        </div>
        <div className="bg-[#e5e1e1]">Description</div>
        <div>{courses.Description}</div>
      </div>
      <div>
        <div className="">ODD Semester 2023/2024 Course Schedule</div>
        <div className="flex justify-between w-full">
          <div className="border-2 p-2 w-1/2">
            <div className="flex justify-between">
              {" "}
              <div className="font-bold">My Class Schedule</div>{" "}
              <button className="p-1 bg-[#FDF7E7]">Show All</button>
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="">{courses?.CourseCode}</div>{" "}
              <div className="w-1/2 mx-10">Sa 7.00AM - 8.00AM DORMITORY 15</div>
            </div>
          </div>
          <div className="border-2 p-2 flex flex-col justify-between w-1/2">
            <div className="flex justify-between">
              {" "}
              <div className="font-bold">Shopping Cart</div>{" "}
            </div>
            <div className="flex justify-between">
              {" "}
              <div className="">Your shopping cart is empty </div>{" "}
            </div>
          </div>
        </div>
        <div className="border-2">
          <div className="w-1/2 ml-auto flex justify-between">
            <div>Open</div>
            <div>Clossed</div>
            <div>Wait List</div>
          </div>
        </div>
      </div>
      <div>
      <div className="">{courses.CourseCode} sections for OOD Semester 2023/2024</div>
        <div>View All</div>
        <div className="w-full">
          <div>
            <table className=" border-[1px] border-blacks w-full">
              <thead className="border-[1px] border-blacks text-left">
                <tr>
                  <th className="border-2">Section</th>
                  <th className="border-2">Session</th>
                  <th className="border-2">Status</th>
                  <th className="border-2"></th>
                </tr>
              </thead>
              <tbody className="border-[1px] border-blacks text-[12px]">
                <tr className="border-[1px] border-blacks bg-[#FDF7E7]">
                  <td>A-LEC (2236)</td>

                  <td className="border-2">1</td>
                  <td className="border-2">OK</td>
                  <td className="border-2 text-center">
                    <div className="flex justify-end">
                      <a href="my-course">
                        <button
                          className="p-1 bg-[#FDF7E7] mt-2"
                          onClick={() => {
                            const selectedCourse = JSON.parse(
                              localStorage.getItem("selectedCourse")
                            );
                            const courses = JSON.parse(
                              localStorage.getItem("courses")
                            );
                            if (!courses) {
                              localStorage.setItem(
                                "courses",
                                JSON.stringify([selectedCourse])
                              );
                            } else {
                              localStorage.setItem(
                                "courses",
                                JSON.stringify([...courses, selectedCourse])
                              );
                            }
                          }}
                        >
                          Add Course
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-2">
            <table className=" border-[1px] border-blacks w-[90%] ml-auto ">
              <thead className="border-[1px] border-blacks text-left">
                <tr>
                  <th className="border-2">Days</th>
                  <th className="border-2">Start</th>
                  <th className="border-2">End</th>
                  <th className="border-2">Room</th>
                  <th className="border-2">Instructor</th>
                  <th className="border-2">Dates</th>
                </tr>
              </thead>
              <tbody className="border-[1px] border-blacks text-[14px]">
                <tr className="border-[1px] border-blacks bg-[#FDF7E7]">
                  <td className="border-2">Sa</td>
                  <td className="border-2">5:00PM</td>
                  <td className="border-2">6:40PM</td>
                  <td className="border-2">DORMITORY 12</td>
                  <td className="border-2">Drs. Agustinus Silalahi, M.Si.</td>
                  <td className="border-2">22/08/2023 - 09/12/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ClassDetail;
