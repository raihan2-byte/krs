import React, { useEffect, useState, useHistory } from "react";
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import Navbar from "../Component/Navbar";
import Header from "../Component/Header";

const MyCourse = () => {
  // const courses = JSON.parse(localStorage.getItem("courses"));
  // console.log("halo")
  const [courses, setCourses] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);

  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Navigate to "/home" when in the 3rd step
      window.location.href = '/home';
    }
  };;

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
    <>
      <Header />
      <Navbar />
      <div className="m-8 w-1/2">
        <div className="my-2">
          <p>Add Classes</p>
          <div className="absolute w-full">
            <button
              className={`relative bottom-4 left-[35%] px-2 py-px border-black border-[3px] ${
                buttonStates.button1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleClick("button1")}
            >
              1
            </button>
            <button
              className={`relative bottom-4 left-[37%] px-2 py-px border-black border-[3px] ${
                buttonStates.button2
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleClick("button2")}
            >
              2
            </button>
            <button
              className={`relative bottom-4 left-[39%] px-2 py-px border-black border-[3px] ${
                buttonStates.button3
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleClick("button3")}
            >
              3
            </button>
          </div>
          <hr className="h-1 top-0 bg-black border-[0.5px] " />
          <p className="text-[18px] mt-4 ml-4">Search by My Requirements</p>
          <p>
            ODD/EVEN Semester 2024 | Undergraduate | Atma Jaya Catholic
            University
          </p>
          <a href="add-class">
            <p className="underline text-blue-500 font-bold text-[12px]">
              Return to 1. Select classes to add
            </p>
          </a>
          <table className="table-auto w-full mt-10 border-[2px] border-black text-center">
            <thead className="border-[2px] border-blacks">
              <tr className="text-blue-500 font-bold border-[2px] border-black">
                <th className="border-[2px] border-black">Course</th>
                <th className="border-[2px] border-black">Description</th>
                <th className="border-[2px] border-black">Units</th>
                <th className="border-[2px] border-black">When</th>
                <th className="border-[2px] border-black">Grade</th>
              </tr>
            </thead>
            <tbody className="border-[2px] border-black text-[12px] text-center">
              {courses?.map((item, index) => (
                // <p key={index}>{item.CourseCode}</p>
                <tr className="border-[2px] border-black">
                  <td className="border-[2px] border-black">
                    {item.CourseCode}
                  </td>
                  <td className="border-[2px] border-black">
                    <a
                      href="class-detail"
                      className="underline text-blue-500"
                      onClick={() =>
                        localStorage.setItem("selectedMk", JSON.stringify(item))
                      }
                    >
                      {item.Description}
                    </a>
                  </td>

                  <td className="border-[2px] border-black">{item.Units}</td>
                  <td className="border-[2px] border-black"></td>
                  <td className="border-[2px] border-black"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end w-[95%] mt-8 ">
          <button
          className="underline p-1 bg-orange-500 text-blue-500 font-bold border-2 border-black"
          onClick={handleButtonClick}
        >
          {currentStep === 1 && 'Search'}
          {currentStep === 2 && 'Processing 2 of 3'}
          {currentStep === 3 && 'Processing 3 of 3'}
        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
