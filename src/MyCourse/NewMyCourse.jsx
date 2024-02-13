import React, { useEffect, useState, useHistory } from "react";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

import Trash from "../assets/svg/Trash.svg";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";

const NewMyCourse = () => {
  // const courses = JSON.parse(localStorage.getItem("courses"));
  // console.log("halo")
  const [MyCourses, setCourses] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);

  const courses = JSON.parse(localStorage.getItem("selectedMk"));
  // const courses1 = JSON.parse(localStorage.getItem("selectedCourse"));

  console.log(JSON.parse(localStorage.getItem("selectedMk")));

  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Navigate to "/home" when in the 3rd step
      window.location.href = "/home";
    }
  };

  useEffect(() => {
    const coursesData = localStorage.getItem("courses");
    console.log(JSON.parse(coursesData));
    console.log(typeof coursesData);
    if (coursesData?.length > 0) {
      setCourses(JSON.parse(coursesData));
    } else {
      setCourses(null);
    }
  }, []);

  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleClick = (button) => {
    setButtonStates((prevState) => ({
      button1: button === "button1" ? !prevState.button1 : false,
      button2: button === "button2" ? !prevState.button2 : false,
      button3: button === "button3" ? !prevState.button3 : false,
    }));
  };

  return (
    <div className=" ml-5 border-2 w-full p-2 my-2     ">
      <div className="w-full ">
        <p>EVEN Semester 2023/2024 Shopping Cart</p>

        <table className="table-auto w-full border-[2px] border-black text-center text-[10px]">
          <thead className="border-[2px] border-blacks">
            <tr className="text-blue-500 font-bold border-[2px] border-black">
              <th className="border-[2px] border-black">Delete</th>
              <th className="border-[2px] border-black">Class</th>
              <th className="border-[2px] border-black">Day/Times</th>
              <th className="border-[2px] border-black">Room</th>
              <th className="border-[2px] border-black">Instructor</th>
              <th className="border-[2px] border-black">Units</th>
              <th className="border-[2px] border-black">Status</th>
            </tr>
          </thead>
          <tbody className="border-[2px] border-black text-[12px] text-center">
            {MyCourses?.map((item, index) => (
              <tr className="border-[2px] border-black">
                <td className="border-[2px] border-black">
                  {/* <a
                    href="class-detail"
                    className="underline text-blue-500"
                    onClick={() =>
                      localStorage.setItem("selectedMk", JSON.stringify(item))
                    }
                  > */}
                    <a
                      className=""
                      href=""
                      onClick={() => {
                        // console.log(item)
                        // return
                        const courses = JSON.parse(
                          localStorage.getItem("courses")
                        );
                        // const selectedCourse = JSON.parse(
                        //   localStorage.getItem("selectedMk")
                        // );
                        // console.log(courses)
                        // return

                        const filteredData = courses.filter(
                          (itemCourses) =>
                            itemCourses.Description != item.Description
                        );
                        localStorage.setItem(
                          "courses",
                          JSON.stringify(filteredData)
                        );
                      }}
                    >
                      <img src={Trash} alt="" className="p-2" />
                    </a>
                  {/* </a> */}
                </td>
                <td className="border-[2px] border-black">{item.CourseCode}</td>
                <td className="border-[2px] border-black">
                  Sa 4:00PM - 5:40PM
                </td>
                <td className="border-[2px] border-black">DORMITORY 11</td>
                <td className="border-[2px] border-black">
                  Drs. Agustinus Silalahi, M.Si.
                </td>

                <td className="border-[2px] border-black">{item.Units}</td>
                <td className="border-[2px] border-black">ok</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-end w-[95%] mt-8 ">
          <button
          className="underline p-1 bg-orange-500 text-blue-500 font-bold border-2 border-black"
          onClick={handleButtonClick}
        >
          {currentStep === 1 && 'Search'}
          {currentStep === 2 && 'Processing 2 of 3'}
          {currentStep === 3 && 'Processing 3 of 3'}
        </button>
          </div> */}
    </div>
  );
};

export default NewMyCourse;
