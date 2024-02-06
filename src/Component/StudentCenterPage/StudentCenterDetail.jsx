import React, { useState } from "react";
import FileSVG from "../../assets/svg/File.svg";

const StudentCenterDetail = () => {
  const [Academic, setAcademic] = useState(false);
  const [Finances, setFinances] = useState(false);
  const [PersonalInformation, setPersonalInformation] = useState(false);

  return (
    <div className="h-[100vh] w-full">
      <div>MARSELA GRACIA's Student Center</div>
      <hr />
      <div className="dropdown inline-block relative border-2 text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setAcademic(!Academic);
          }}
        >
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          <span className="mr-1 text-[12px] text-[#F1CB8C] font-bold">
            Academics
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Academic ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 py-3`}
        >
          <li className="flex items-center justify-start text-[10px]">
            <div className="flex justify-between w-[60%] ">
              <div className="text-blue-500">
                <div className="font-bold">
                  <span className="underline">P</span>
                  <span>lan</span>
                </div>
                <div className="font-bold">
                  <span className="underline">S</span>
                  <span>earch</span>
                </div>
                <div className="font-bold">
                  <span className="underline">E</span>
                  <span>nroll</span>
                </div>
                <div className="font-bold">
                  <span className="underline">My</span>
                  <span> Academics</span>
                </div>
                <div className="font-bold">
                  <span className="underline">My</span>
                  <span> Result</span>
                </div>
                <div className="my-4">
                  <select className=" border border-black text-sm w-[35vh] text-black text-[10px] ">
                    <option selected>other academics ...</option>
                    <option value="US">Academic Planner</option>
                    <option value="CA">Academic Requirement</option>
                    <option value="FR">Advising Notes</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="border-[1px] border-blue-500 p-2 w-[50vh]">
                  You are not enrolled in classes.
                </div>
                <div className="flex mt-5 justify-end">
                  <div> Enrollment Shopping Cart Shopping Cart</div>

                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setFinances(!Finances);
          }}
        >
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          <span className="mr-1 text-[12px] text-[#F1CB8C] font-bold">
            Finances
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Finances ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 py-3`}
        >
          <li className="flex items-center justify-start text-[10px]">
            <div className="flex justify-between w-[60%] ">
              <div className="text-blue-500">
                <div className="font-bold">
                  <button className="bg-[#F1F5F6] text-[#F1CB8C] p-1 px-2 text-[12px] pr-8 border-2">
                    My Account
                  </button>
                </div>
                <div className="font-bold">
                  <span className="">Account Inquiry</span>
                </div>

                <div className="my-4">
                  <select className=" border border-black text-sm w-[35vh] text-black text-[10px] ">
                    <option selected>other financial...</option>
                    <option value="US">Account Activity</option>
                    <option value="CA">Charges Due</option>
                    <option value="FR">Enroll in Payment plan</option>
                    <option value="FR">Payments</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="border-[1px] border-blue-500 p-2 w-[50vh] ml-10">
                  You have no outstanding charges at this time.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setPersonalInformation(!PersonalInformation);
          }}
        >
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          <span className="mr-1 text-[12px] text-[#F1CB8C] font-bold">
            Personal Information
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            PersonalInformation ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 py-3`}
        >
          <li className="flex items-center justify-start text-[10px]">
            <div className="flex justify-between w-full">
              <div className="text-blue-500">
                <div className="font-bold">
                  <span>Demographic Data</span>
                </div>
                <div className="font-bold">
                  <span>Emergency Contact</span>
                </div>
                <div className="font-bold">
                  <span>Names</span>
                </div>
                <div className="font-bold">
                  <span> User Preferences</span>
                </div>

                <div className="my-4">
                  <select className=" border border-black text-sm w-[35vh] text-black text-[10px] ">
                    <option selected>other personal ...</option>
                    <option value="US">Adresses</option>
                    <option value="CA">Email Adresses</option>
                    <option value="FR">Honor and Awards</option>
                    <option value="FR">Languanges</option>
                    <option value="FR">Phone Numbers</option>
                    <option value="FR">Work Experience</option>
                  </select>
                </div>
              </div>
                <div className="border-2 w-full mx-5">
                  <div className="bg-[#F1F5F6] w-full text-[14px] text-[#F1CB8C] font-bold">Contact Information</div>
                  <div className="mt-2 flex mx-2 justify-between w-[80%] text-[12px]">
                    <div>
                      <div className="text-blue-500">Home Address</div>
                      <div className="ml-4">
                        <div>JL CIMONE PERMAI VI NO 158</div>
                        <div>RT 003 RW 007</div>
                        <div>Kelurahan CIMONE</div>
                        <div>Kecamatan KARAWACI</div>
                        <div>TANGERANG 15114</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-500">Billing Address</div>
                      <div className="ml-4">
                        <div>None</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-10 mx-2 justify-between w-[80%] text-[12px]">
                  <div>
                      <div className="text-blue-500">Primary Phone</div>
                      <div className="ml-4">
                        <div>None</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-500">Campus E-mail</div>
                      <div className="ml-4">
                        <div>None</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentCenterDetail;
