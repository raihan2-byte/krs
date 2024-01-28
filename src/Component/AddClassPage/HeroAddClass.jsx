import React from "react";

const HeroAddClass = () => {
  return (
    <div className="m-5 w-[45%]">
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
        <p className="text-[12px]">Search by My Requirements</p>
        <p>
          ODD Semester 2023/2024 | Undergraduate | Atma Jaya Catholic University
        </p>
        <p>Return to 1. Select classes to add</p>
        <div className="flex my-6 justify-between">
          <div>
            <p className="text-[11px]">Select Display Option</p>
          </div>
          <div className=" flex   ">
            <div className="flex items-center justify-between w-full ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[11px]">Hide Requirement Details</p>
              </label>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex items-center justify-between w-full ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[11px]">Show Requirement Details</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px bg-black border-[0.5px] " />
      <div className="flex my-2 justify-between ml-auto w-[65%]">
      <div className=" flex   ">
            <div className="flex items-center justify-between w-full ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[11px]">In Progress</p>
              </label>
            </div>
          </div>
          <div className=" flex   ">
            <div className="flex items-center justify-between w-full ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[11px]">In Progress</p>
              </label>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex items-center justify-between w-full ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 "
              />
              <label for="default-radio-1" className="ms-2 text-black">
                <p className="text-[11px]">Planned</p>
              </label>
            </div>
          </div>
        </div>
        <hr className="h-px bg-black border-[0.5px] " />
        

    </div>
  );
};

export default HeroAddClass;
