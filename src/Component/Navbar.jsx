import React from "react";
import Logo from "../assets/picture/Logo_Unika_Atma_Jaya.png";
import HomeSvg from "../assets/svg/Home.svg"

const Navbar = () => {
  return (
    <nav class="bg-[#FF6E02]">
      <div class="px-2">
        <div class=" flex h-16  justify-between">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-12" src={Logo} alt="Your Company" />
          </div>
          <div class="absolute flex sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
            <div class="hidden sm:ml-6 sm:block ">
              <div class="flex ">
                <div className="flex">
                  <div className="flex">
                  <img src={HomeSvg} alt="" className="w-[20px] items-center"/>
                  <a
                    href="/home"
                    class="text-white hover:text-gray-300 py-2 pr-6 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>

                  </div>
                  <body class=" relative">
                    <div class="absolute m-2 left-1/2 -ml-0.5 w-[1px] h-1/2 bg-[#ADB7C6]"></div>
                  </body> 
                </div>
                <div className="flex">
                  <a
                    href="/home"
                    class="text-white hover:text-gray-300 px-6 py-2 text-sm font-medium"
                  >
                    Elearning Atma Jaya
                  </a>
                  <body class="relative">
                    <div class="absolute m-2 left-1/2 -ml-0.5 w-[1px] h-1/2 bg-[#ADB7C6]"></div>
                  </body>
                </div>
                <div className="flex">
                  <a
                    href="/home"
                    class="text-white hover:text-gray-300 px-6 py-2 text-sm font-medium"
                  >
                    Add to Favorites
                  </a>
                  <body class=" relative">
                    <div class="absolute m-2 left-1/2 -ml-0.5 w-[1px] h-1/2 bg-[#ADB7C6]"></div>
                  </body>
                </div>
                <div className="flex">
                  <a
                    href="/home"
                    class="text-white hover:text-gray-300 px-6 py-2 text-sm font-medium"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
