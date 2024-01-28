import React, { useState } from "react";
import SelfServiceSvg from "../assets/svg/SelfService.svg";
import FileSVG from "../assets/svg/File.svg";

const Header = () => {
  const [favoritesDropdownOpen, setFavoritesDropdownOpen] = useState(false);
  const [mainMenuDropdownOpen, setMainMenuDropdownOpen] = useState(false);
  const [selfServiceDropdownOpen, setSelfServiceDropdownOpen] = useState(false);
  const [enrollmentMenuDropdownOpen, setEnrollmentMenuDropdownOpen] =
    useState(false);
  const [campusComunityMenuDropdownOpen, setCampusComunityMenuDropdownOpen] =
    useState(false);
  const [reportingToolsMenuDropdownOpen, setReportingToolsMenuDropdownOpen] =
    useState(false);
  const [BIPublisherMenuDropdownOpen, setBIPublisherMenuDropdownOpen] =
    useState(false);

  // const toggleMainMenuDropdown = () => {
  //   setMainMenuDropdownOpen(!mainMenuDropdownOpen);
  // };

  return (
    <div className="text-[10px]">
      <div className="flex bg-[#13324E]">
        <div className="dropdown inline-block relative">
          <button
            className="text-white font-semibold py-1 px-2 inline-flex items-center"
            onClick={() => {
              setFavoritesDropdownOpen(!favoritesDropdownOpen);
            }}
          >
            <span className="mr-1 text-[10px]">Favorites</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul
            className={`dropdown-menu absolute ${
              favoritesDropdownOpen ? "block" : "hidden"
            } bg-white text-gray-700 p-4 w-[40vh] border-solid border-[1px] border-black `}
          >
            <li className="">
              <a
                className="text-black font-semibold  hover:bg-gray-100  px-4 block whitespace-no-wrap"
                href="/"
              >
                Recently Used
              </a>
            </li>
            <li className="">
              <div className="flex mx-4">
                <img src={FileSVG} alt="" className=" w-[7%] mr-4" />
                <a
                  className=" text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                  href="/"
                >
                  Enrollment: Add Classes
                </a>
              </div>
            </li>
            <li className="">
              <div className="flex mx-4">
                <img src={FileSVG} alt="" className=" w-[7%] mr-4" />
                <a
                  className="text-blue-400  hover:bg-gray-100 block whitespace-no-wrap"
                  href="/"
                >
                  SKP Recap - Student
                </a>
              </div>
            </li>
            <li className="">
              <div className="flex mx-4">
                <img src={FileSVG} alt="" className=" w-[7%] mr-4" />
                <a
                  className="text-blue-400  hover:bg-gray-100  block whitespace-no-wrap"
                  href="/"
                >
                  My Course History
                </a>
              </div>
            </li>

            <li className="">
              <div className="flex mx-4">
                <img src={FileSVG} alt="" className=" w-[7%] mr-4" />
                <a
                  className="text-blue-400  hover:bg-gray-100 block whitespace-no-wrap"
                  href="/"
                >
                  Account Inquiry
                </a>
              </div>
            </li>
            <li className="">
              <div className="flex mx-4">
                <img src={FileSVG} alt="" className=" w-[7%] mr-4" />
                <a
                  className="text-blue-400  hover:bg-gray-100 block whitespace-no-wrap"
                  href="/"
                >
                  Kuesioner Kepuasan Mahasiswa
                </a>
              </div>
            </li>
            <li className="">
              <a
                className="text-black font-semibold  hover:bg-gray-100 pt-2  px-4 block whitespace-no-wrap"
                href="/"
              >
                My Favorites
              </a>
            </li>
            <li className="">
              <a
                className="text-blue-400  hover:bg-gray-100  px-4 block whitespace-no-wrap"
                href="/"
              >
                Add to Favorites
              </a>
            </li>
            <li className="">
              <a
                className="text-blue-400  hover:bg-gray-100  px-4 block whitespace-no-wrap"
                href="/"
              >
                Edit Favorite
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown inline-block relative ">
          <button
            className="text-white font-semibold py-1 px-2 inline-flex items-center"
            onClick={() => {
              setMainMenuDropdownOpen(!mainMenuDropdownOpen);
            }}
          >
            <span className="mr-1 text-[10px]">Main Menu</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul
            className={`dropdown-menu absolute z-10 ${
              mainMenuDropdownOpen ? "block" : "hidden"
            } bg-white text-gray-700 p-4 w-[40vh] border-solid border-[1px] border-black`}
          >
            <li className="">
              <a
                className=" text-blue-400 hover:bg-gray-100   block whitespace-no-wrap"
                href="/"
              >
                Search Menu
              </a>
            </li>
            <li className="">
              <a
                className="text-black font-semibold  hover:bg-gray-100  block whitespace-no-wrap"
                href="/"
              >
                <div class="mb-3">
                  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      // placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                    />
                  </div>
                </div>
              </a>
            </li>

            <li className="dropdown-student relative">
              <button
                className="text-white font-semibold py-1 flex justify-between w-full"
                onClick={() => {
                  setSelfServiceDropdownOpen(!selfServiceDropdownOpen);
                }}
              >
                <div className="flex items-center">
                  <img src={SelfServiceSvg} alt="" className="w-[10%] mr-2" />
                  <a className="text-blue-400 hover:bg-gray-100 ">
                    Self Service
                  </a>
                </div>
                <svg
                  className=" h-4 w-4"
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul
                className={`dropdown-menu-student absolute ${
                  selfServiceDropdownOpen ? "block" : "hidden"
                } bg-white text-gray-700 p-4 w-[40vh] ml-40 mt-[-20px] border-solid border-[1px] border-black`}
              >
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[7%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                      href="/"
                    >
                      Class Search / Browse Catalog
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[8%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                      href="/"
                    >
                      Academic Planning
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="dropdown-enrollment ">
                  <button
                    className="text-white font-semibold py-1 flex justify-between w-full"
                    onClick={() => {
                      setEnrollmentMenuDropdownOpen(
                        !enrollmentMenuDropdownOpen
                      );
                    }}
                  >
                    <div className="flex items-center">
                      <img
                        src={SelfServiceSvg}
                        alt=""
                        className="w-[10%] mr-2"
                      />
                      <a className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap">
                        Enrollment
                      </a>
                    </div>
                    <svg
                      className=" h-4 w-4"
                      color="black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul
                    className={`dropdown-menu-enrollment absolute ${
                      enrollmentMenuDropdownOpen ? "block" : "hidden"
                    } bg-white text-gray-700 p-4 w-[40vh] ml-40 mt-[-20px] border-solid border-[1px] border-black`}
                  >
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="/"
                        >
                          Enrollment Dates
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="/"
                        >
                          My Class Schedule
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="/"
                        >
                          My Weekly Schedule
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="add-class"
                        >
                          Enrollment: Add Classes
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="/"
                        >
                          Enrollment: Drop Classes
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex ">
                        <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                        <a
                          className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                          href="/"
                        >
                          View My Milestones
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[9%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Campus Finances
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[7%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Campus Personal Information
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[9%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Academic Records
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[10%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Transfer Credit
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img src={SelfServiceSvg} alt="" className="w-[9%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Research Activities
                    </a>
                  </div>
                  <svg
                    className=" h-4 w-4"
                    color="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Cek Jadwal Sidang
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      My Exam Timetable
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Academic Evaluation
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Student Center
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Kuesioner Mahasiswa Baru
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      SKP Recap - Student
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Upload SKP - Student
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Upload Document Mahasiswa
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Service Request
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Student Status
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Kuesioner Kepuasan Mahasiswa
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Kuesioner Pemetaan Mhs Baru
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex ">
                    <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                    <a
                      className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                      href="/"
                    >
                      Request Letters
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown-enrollment ">
              <button
                className="text-white font-semibold py-1 flex justify-between w-full"
                onClick={() => {
                  setCampusComunityMenuDropdownOpen(
                    !campusComunityMenuDropdownOpen
                  );
                }}
              >
                <div className="flex items-center">
                  <img src={SelfServiceSvg} alt="" className="w-[8%] mr-2" />
                  <a
                    className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                    href="/"
                  >
                    Campus Community
                  </a>
                </div>
                <svg
                  className=" h-4 w-4"
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul
                className={`dropdown-menu-enrollment absolute ${
                  campusComunityMenuDropdownOpen ? "block" : "hidden"
                } bg-white text-gray-700 p-4 w-[40vh] ml-40 mt-[-20px] border-solid border-[1px] border-black`}
              >
                <li>
                  <a
                    className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                    href="/"
                  >
                    Student Graduate Detail
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                    href="/"
                  >
                    Graduation Registration
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={SelfServiceSvg} alt="" className="w-[8.5%] mr-2" />
                  <a
                    className=" text-blue-400 hover:bg-gray-100   block whitespace-no-wrap"
                    href="/"
                  >
                    Student Financials
                  </a>
                </div>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 10"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </li>

            <li className="dropdown-enrollment ">
              <button
                className="text-white font-semibold py-1 flex justify-between w-full"
                onClick={() => {
                  setReportingToolsMenuDropdownOpen(
                    !reportingToolsMenuDropdownOpen
                  );
                }}
              >
                <div className="flex items-center">
                  <img src={SelfServiceSvg} alt="" className="w-[9%] mr-2" />
                  <a
                    className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                    href="/"
                  >
                    Reporting Tools
                  </a>
                </div>
                <svg
                  className=" h-4 w-4"
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul
                className={`dropdown-menu-enrollment absolute ${
                  reportingToolsMenuDropdownOpen ? "block" : "hidden"
                } bg-white text-gray-700 p-4 w-[40vh] ml-40 mt-[-20px] border-solid border-[1px] border-black`}
              >
                <li className="dropdown-enrollment ">
                  <button
                    className="text-white font-semibold py-1 flex justify-between w-full"
                    onClick={() => {
                      setBIPublisherMenuDropdownOpen(
                        !BIPublisherMenuDropdownOpen
                      );
                    }}
                  >
                    <a
                      className="text-blue-400 hover:bg-gray-100 block whitespace-no-wrap"
                      href="/"
                    >
                      BI Publisher
                    </a>
                    <svg
                      className=" h-4 w-4"
                      color="black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul
                    className={`dropdown-menu-enrollment absolute ${
                      BIPublisherMenuDropdownOpen ? "block" : "hidden"
                    } bg-white text-gray-700 p-4 w-[40vh] ml-40 mt-[-20px] border-solid border-[1px] border-black`}
                  >
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        Setup
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        Report Definition
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        Content Library
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        Query Report Viewer
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        Query Report Scheduler
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-400 hover:bg-gray-100  block whitespace-no-wrap"
                        href="/"
                      >
                        BIP Report Search
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={SelfServiceSvg} alt="" className="w-[10%] mr-2" />
                  <a
                    className=" text-blue-400 hover:bg-gray-100   block whitespace-no-wrap"
                    href="/"
                  >
                    People Tools
                  </a>
                </div>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 10"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </li>

            <li className="">
              <div className="flex ">
                <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                <a
                  className="text-blue-400  hover:bg-gray-100   block whitespace-no-wrap"
                  href="/"
                >
                  Change My Password
                </a>
              </div>
            </li>
            <li className="">
              <div className="flex ">
                <img src={FileSVG} alt="" className=" w-[6%] mr-2" />
                <a
                  className="text-blue-400  hover:bg-gray-100   block whitespace-no-wrap"
                  href="/"
                >
                  My System Profile
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
