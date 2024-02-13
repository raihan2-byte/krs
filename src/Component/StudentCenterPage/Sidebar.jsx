import React, { useState } from "react";
import FileSVG from "../../assets/svg/File.svg";

const Sidebar = () => {
  const [PanduanAtmaJaya, setPanduanAtmaJaya] = useState(false);
  const [Sertifikat, setSertifikat] = useState(false);
  const [Holds, setHolds] = useState(false);
  const [ToDoList, setToDoList] = useState(false);
  const [Milestones, setMilestones] = useState(false);
  const [EnrollmentDates, setEnrollmentDates] = useState(false);
  const [Advisor, setAdvisor] = useState(false);

  return (
    <div className="w-1/3  m-2 ">
      <div className="border-2 border-black p-1 my-1 text-center rounded-sm">
        <button className="bg-[#FBE9C9] p-1 px-6 rounded-sm text-[12px] w-full border-2">
          Search for Classes
        </button>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setPanduanAtmaJaya(!PanduanAtmaJaya);
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
            Panduan Atmajaya
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            PanduanAtmaJaya ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              Buku Saku Mahasiswa 2023
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setSertifikat(!Sertifikat);
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
            Sertifikat
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Sertifikat ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              Semester Genap 2020/2021
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setHolds(!Holds);
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
            Holds
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Holds ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              No Holds.
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setToDoList(!ToDoList);
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
            To Do List
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            ToDoList ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              No To Do's.
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setMilestones(!Milestones);
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
            Milestones
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Milestones ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              No Milestones
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setEnrollmentDates(!EnrollmentDates);
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
            Enrollment Dates
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            EnrollmentDates ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex items-center justify-start  text-[10px]">
            <a
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
              href="/home"
            >
              Open Enrollment Dates
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative border-2 border-black text-left w-full my-1">
        <button
          className="text-black font-semibold py-1 px-4 inline-flex items-center justify-left w-full  bg-[#F1F5F6]"
          onClick={() => {
            setAdvisor(!Advisor);
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
            Advisor
          </span>
        </button>
        <ul
          className={`dropdown-menu ${
            Advisor ? "block" : "hidden"
          } bg-white text-gray-700 p-1 w-full border-1 border-black `}
        >
          <li className="flex  items-center justify-start  text-[10px]">
            <div
              className="text-black font-semibold hover:bg-gray-100 text-left px-4"
             
            >
              <p className="font-bold">Academic Advisor</p>
              <div className="">

            <p>Ir. Enny Widyawati, M. T.,</p>
            <p>IPM.</p>
            <p>021 4605 416</p>
            </div>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
