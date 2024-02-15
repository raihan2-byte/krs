import React from "react";
import MyCourse from "../../MyCourse/MyCourse";
import NewMyCourse from "../../MyCourse/NewMyCourse";
import { useState } from "react";

const HeroAddClass = () => {
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

  return (
    <div className="m-5 w-[60%]">
      <div className="flex justify-between my-4">
        <div className="text-[14px]">
          <p>MARSELLA GRACIA</p>
        </div>
        <select className=" border border-black text-sm w-[40%] text-black text-[10px] ">
          <option selected>go to ...</option>
          <option value="US">Account Inquiry</option>
          <option value="CA">My Academic</option>
          <option value="FR">Personal Data Summary</option>
          <option value="DE">Student Center</option>
          <option value="DE">Student Center</option>
          <option value="DE">User Preferences</option>
        </select>
      </div>
      <div className="flex text-[13px] ">
        <div className="border px-[12px] mx-[1px] bg-[#F9F9F9]">
          <button>
            {" "}
            <span className="underline">S</span>earch
          </button>
        </div>
        <div className="border px-[12px] mx-[1px] bg-[#F9F9F9]">
          <button>
            <span className="underline">Pl</span>an
          </button>
        </div>
        <div className="border px-[12px] mx-[1px] bg-[#F9F9F9] font-bold">
          <button>Enroll</button>
        </div>
        <div className="border px-[12px] mx-[1px] bg-[#F9F9F9]">
          <button>
            <span className="underline">My</span> Academics
          </button>
        </div>
        <div className="border px-[12px] mx-[1px] bg-[#F9F9F9]">
          <button>
            <span className="underline">My</span> Result
          </button>
        </div>
      </div>
      <hr className="h-[2px] bg-[#DAE6F4] border-0 " />
      <div className="flex text-[11px] my-2">
        <div className=" flex px-[12px]  bg-[#F9F9F9]">
          <button>
            {" "}
            <span className="underline">My</span> Class Schedule
          </button>
          <body class="relative">
            <div class="absolute mx-2 w-[1px] my-[2px] h-[75%] bg-black"></div>
          </body>
        </div>
        <div className="flex px-[12px]  bg-[#F9F9F9] font-bold">
          <button>Add</button>
          <body class="relative">
            <div class="absolute mx-2 w-[1px] my-[2px] h-[75%] bg-black"></div>
          </body>
        </div>
        <div className="flex px-[12px]  bg-[#F9F9F9]">
          <button>
            <span className="underline">D</span>rop
          </button>
          <body class="relative">
            <div class="absolute mx-2 w-[0.5px] my-[2px] h-[75%] bg-black"></div>
          </body>
        </div>
        <div className="px-[12px]  bg-[#F9F9F9]">
          <button>
            <span className="underline">T</span>erm Information
          </button>
        </div>
      </div>
      <div className="my-2">
        <p>Add Classes</p>
        <hr className="h-px my-1 bg-black border-[0.5px] " />
        <p className="text-[18px] font-medium text-blue-500">
          1. Select classes to add
        </p>
        <p className="ml-4 my-4">
          To select classes for another term, select the term and select Change.
          When you are satisfied with your class selections, proceed to step 2
          of 3.
        </p>
        <p className="font-bold text-[11px]">
          EVEN Semester 2023/2024 | Undergraduate | Atma Jaya Catholic
          University
        </p>
        <div className="border-2 p-2">
          <div className="flex ml-auto justify-between w-1/2 mr-10">
            <div className=" flex">
              <div className="flex items-center justify-between w-full ">
                <button className="">Open</button>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex items-center justify-between w-full ">
                <button className="">Closed</button>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex items-center justify-between w-full ">
                <button className="">Wait List</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2">
        <div className="flex w-full">
          <div className="w-[25%] ">
            <div className="my-2 text-[14px]">Find Classes</div>
            <div className="ml-4">

            <div className="flex items-center  w-full my-2">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[12px] font-bold">My Requirements</p>
              </label>
            </div>
            <div className="flex items-center  w-full my-2">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[12px] font-bold">My Planner</p>
              </label>
            </div>
            <div className="bg-[#FCEDD2] my-2 text-center w-[70%]">
              <a href="/add-class" className=" text-[12px]">Search</a>
            </div>
            </div>

          </div>
          <div className="w-[70%]">
            <NewMyCourse />
          </div>
        </div>
        <div className="w-full flex justify-end">

        <button
          className="underline p-1 bg-[#FCEDD2] font-bold border-2 border-black w-1/3 "
          onClick={handleButtonClick}
        >
          {currentStep === 1 && 'Next'}
          {currentStep === 2 && 'Processing 2 of 3'}
          {currentStep === 3 && 'Finish Enrolling'}
        </button>
        </div>
       
      </div>
      <hr className="h-px bg-black border-[0.5px] " />

      <hr className="h-px bg-black border-[0.5px] " />
    </div>
  );
};

export default HeroAddClass;
