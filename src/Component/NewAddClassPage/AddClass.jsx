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
      Description: "Fisika Dasar",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 108",
      Description: "Kimia",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 109",
      Description: "Multikultural",
      When: "EVEN",
      Units: "2.00",
      Grade: "B+",
      Status: "Passed",
    },
  ];

  const data1 = [
    {
      CourseCode: "TIN 110",
      Description: "Manajemen Pemasaran",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 111",
      Description: "Kewirausahaan",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 112",
      Description: "Praktikum Inovasi",
      When: "EVEN",
      Units: "2.00",
      Grade: "B+",
      Status: "Passed",
    },
  ];

  const data2 = [
    {
      CourseCode: "TIN 113",
      Description: "Praktikum Dasar",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 114",
      Description: "Keagamaan",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 115",
      Description: "Fisika II",
      When: "EVEN",
      Units: "2.00",
      Grade: "B+",
      Status: "Passed",
    },
  ];

  const data3 = [
    {
      CourseCode: "TIN 116",
      Description: "Persamaan Diferensial",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 117",
      Description: "Penelitian Operasional",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 118",
      Description: "Penelitian Operasional II",
      When: "EVEN",
      Units: "2.00",
      Grade: "B+",
      Status: "Passed",
    },
  ];

  const data4 = [
    {
      CourseCode: "TIN 119",
      Description: "Psikologi Industri",
      When: "EVEN",
      Units: "3.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 120",
      Description: "Teknologi Berkelanjutan",
      When: "EVEN",
      Units: "4.00",
      Grade: "B+",
      Status: "Passed",
    },
    {
      CourseCode: "TIN 121",
      Description: "Logika",
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
                onClick={() => {
                  setcoreCourseSem2DropdownOpen(!coreCourseSem2DropdownOpen);
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
                      {data1.map((item, index) => (
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
                      {data2.map((item, index) => (
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
                INDUSTRIAL ENGINEERING - SEMESTER 4
              </div>
              <div className="mr-4 text-[10px]">Statisfied</div>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center justify-between ml-3">
              <button
                className="text-black font-semibold py-1 px-2 items-center "
                onClick={() => {
                  setcoreCourseSem4DropdownOpen(!coreCourseSem4DropdownOpen);
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
                coreCourseSem4DropdownOpen ? "block" : "hidden"
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
                      {data3.map((item, index) => (
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
                INDUSTRIAL ENGINEERING - SEMESTER 5
              </div>
              <div className="mr-4 text-[10px]">Statisfied</div>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center justify-between ml-3">
              <button
                className="text-black font-semibold py-1 px-2 items-center "
                onClick={() => {
                  setcoreCourseSem5DropdownOpen(!coreCourseSem5DropdownOpen);
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
                coreCourseSem5DropdownOpen ? "block" : "hidden"
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
                      {data4.map((item, index) => (
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
        </ul>
      </div>
    </div>
  );
};

export default AddClass;
