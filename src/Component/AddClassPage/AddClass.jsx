import React, { useState } from "react";
import Accordion from "./Accordion";

const AddClass = () => {
  const [favoritesDropdownOpen, setFavoritesDropdownOpen] = useState(false);
  const [coreCourseDropdownOpen, setcoreCourseDropdownOpen] = useState(false);
  const [coreCourseSem2DropdownOpen, setcoreCourseSem2DropdownOpen] =
    useState(false);
  const [coreCourseSem3DropdownOpen, setcoreCourseSem3DropdownOpen] =
    useState(false);
  const [coreCourseSem4DropdownOpen, setcoreCourseSem4DropdownOpen] =
    useState(false);
  const [coreCourseSem5DropdownOpen, setcoreCourseSem5DropdownOpen] =
    useState(false);
  const [coreCourseSem6DropdownOpen, setcoreCourseSem6DropdownOpen] =
    useState(false);
  const [coreCourseSem7DropdownOpen, setcoreCourseSem7DropdownOpen] =
    useState(false);
  const [coreCourseSem8DropdownOpen, setcoreCourseSem8DropdownOpen] =
    useState(false);

  const data = [
    {
      CourseCode: "TIN 107",
      Description: "Aljabar",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 108",
      Description: "Web",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 109",
      Description: "Kalkulus",
      When: "EVEN",
      Units: "2.00",
      Grade: "B+",
      Status: "Passed",
    },
  ];

  return (
    <div className="m-2">
      <div className="dropdown inline-block relative">
        <button
          className="text-black font-semibold py-1 px-2 items-center "
          onClick={() => {
            setFavoritesDropdownOpen(!favoritesDropdownOpen);
          }}
        >
          <div className="flex justify-between w-[90vh] bg-[#f5f2f2]">
            <div className="inline-flex items-center">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <div className="mr-1 text-[10px]">
                S1 - INDUSTRIAL ENGINEERING
              </div>
            </div>

            <div className="mr-1 text-[10px]">Not Statisfied</div>
          </div>
        </button>
        <ul
          className={`dropdown-menu absolute ${
            favoritesDropdownOpen ? "block" : "hidden"
          } bg-white text-black-700 `}
        >
          <li className="flex justify-between ">
            <div className="flex justify-between my-[2px] bg-[#f5f2f2] w-[91vh]">
              <div className="ml-6 text-[10px]">
                INDUSTRIAL ENGINEERING - SEMESTER 1
              </div>
              <div className="mr-4 text-[10px]">Statisfied</div>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center justify-between ml-3">
              <button
                className="text-black font-semibold py-1 px-2 items-center "
                onClick={() => {
                  setcoreCourseDropdownOpen(!coreCourseDropdownOpen);
                }}
              >
                <div className="flex items-center justify-between w-[88vh]">
                  <div className="inline-flex items-center">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    <div className="mr-1 text-[10px]">CORE COURSES</div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-[10px] bg-[#FDF7E7] p-1 px-4">
                      Hide detail ODD Semester 2023/2024
                    </button>
                  </div>
                </div>
              </button>
            </div>

            <ul
              className={`dropdown-menu absolute ${
                coreCourseDropdownOpen ? "block" : "hidden"
              } bg-white text-black-700 `}
            >
              <li className="justify-between ">
                <div className="flex justify-between ">
                  <div className="ml-4 text-red-600 font-medium text-[12px]">
                    The following courses we used to satisfy this requirement:
                  </div>
                </div>
                <div className="text-[12px]">
                  <table className="table-auto  w-[91vh] border-[1px] border-blacks">
                    <thead className="border-[1px] border-blacks">
                      <tr>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Units</th>
                        <th>When</th>
                        <th>Grade</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="border-[1px] border-blacks text-[12px]">
                      {data.map((item, index) => (
                        <tr key={index} className="border-[1px] border-blacks">
                          <td>{item.CourseCode}</td>
                          <a
                            href="class-details"
                            className="text-blue-500"
                            onClick={() =>
                              localStorage.setItem(
                                "selectedCourse",
                                JSON.stringify(item)
                              )
                            }
                          >
                            <td>{item.Description}</td>
                          </a>
                          <td>{item.Units}</td>
                          <td className="w-[20%] m-auto">{item.When}</td>
                          <td>{item.Grade}</td>
                          <td>{item.Status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end text-[12px]">
                  <button>View All</button>
                </div>
              </li>
            </ul>
          </li>
          <li className="flex justify-between ">
            <div className="flex justify-between my-[2px] bg-[#f5f2f2] w-[91vh]">
              <div className="ml-6 text-[10px]">
                INDUSTRIAL ENGINEERING - SEMESTER 2
              </div>
              <div className="mr-4 text-[10px]">Statisfied</div>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center justify-between ml-3">
              <button
                className="text-black font-semibold py-1 px-2 items-center "
                onClick={() => {}}
              >
                <div className="flex items-center justify-between w-[88vh]">
                  <div className="inline-flex items-center">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    <div className="mr-1 text-[10px]">CORE COURSES</div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-[10px] bg-[#FDF7E7] p-1 px-4">
                      Hide detail ODD Semester 2023/2024
                    </button>
                  </div>
                </div>
              </button>
            </div>
            <ul
              className={`dropdown-menu absolute ${
                coreCourseSem2DropdownOpen ? "block" : "hidden"
              } bg-white text-black-700 `}
            >
              <li className="justify-between ">
                <div className="flex justify-between ">
                  <div className="ml-4 text-red-600 font-medium text-[12px]">
                    The following courses we used to satisfy this requirement:
                  </div>
                </div>
                <div className="text-[12px]">
                  <table className="table-auto  w-[91vh] border-[1px] border-blacks">
                    <thead className="border-[1px] border-blacks">
                      <tr>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Units</th>
                        <th>When</th>
                        <th>Grade</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="border-[1px] border-blacks text-[12px]">
                      <tr className="border-[1px] border-blacks">
                        <td>TIN 107</td>
                        <a href="class-detail" className="text-blue-500">
                          <td>ALJABAR LINIER</td>
                        </a>
                        <td>3.00</td>
                        <td className="w-[20%] m-auto">
                          EVEN Semester 2020/2021
                        </td>
                        <td>B+</td>
                        <td>Passed</td>
                      </tr>
                      <tr>
                        <td>TIN 107</td>
                        <a href="" className="text-blue-500">
                          <td>ALJABAR LINIER</td>
                        </a>
                        <td>3.00</td>
                        <td className="w-[20%] m-auto">
                          EVEN Semester 2020/2021
                        </td>
                        <td>B+</td>
                        <td>Passed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end text-[12px]">
                  <button>View All</button>
                </div>
              </li>
            </ul>
          </li>
          <li className="flex justify-between ">
            <div className="flex justify-between my-[2px] bg-[#f5f2f2] w-[91vh]">
              <div className="ml-6 text-[10px]">
                INDUSTRIAL ENGINEERING - SEMESTER 3
              </div>
              <div className="mr-4 text-[10px]">Statisfied</div>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center justify-between ml-3">
              <button
                className="text-black font-semibold py-1 px-2 items-center "
                onClick={() => {
                  setcoreCourseSem3DropdownOpen(!coreCourseSem3DropdownOpen);
                }}
              >
                <div className="flex items-center justify-between w-[88vh]">
                  <div className="inline-flex items-center">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    <div className="mr-1 text-[10px]">CORE COURSES</div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-[10px] bg-[#FDF7E7] p-1 px-4">
                      Hide detail ODD Semester 2023/2024
                    </button>
                  </div>
                </div>
              </button>
            </div>
            <ul
              className={`dropdown-menu absolute ${
                coreCourseSem3DropdownOpen ? "block" : "hidden"
              } bg-white text-black-700 `}
            >
              <li className="justify-between ">
                <div className="flex justify-between ">
                  <div className="ml-4 text-red-600 font-medium text-[12px]">
                    The following courses we used to satisfy this requirement:
                  </div>
                </div>
                <div className="text-[12px]">
                  <table className="table-auto  w-[91vh] border-[1px] border-blacks">
                    <thead className="border-[1px] border-blacks">
                      <tr>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Units</th>
                        <th>When</th>
                        <th>Grade</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="border-[1px] border-blacks text-[12px]">
                      <tr className="border-[1px] border-blacks">
                        <td>TIN 107</td>
                        <a href="" className="text-blue-500">
                          <td>ALJABAR LINIER</td>
                        </a>
                        <td>3.00</td>
                        <td className="w-[20%] m-auto">
                          EVEN Semester 2020/2021
                        </td>
                        <td>B+</td>
                        <td>Passed</td>
                      </tr>
                      <tr>
                        <td>TIN 107</td>
                        <a href="" className="text-blue-500">
                          <td>ALJABAR LINIER</td>
                        </a>
                        <td>3.00</td>
                        <td className="w-[20%] m-auto">
                          EVEN Semester 2020/2021
                        </td>
                        <td>B+</td>
                        <td>Passed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end text-[12px]">
                  <button>View All</button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddClass;
