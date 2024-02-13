import React from 'react'


const NavAddClass = () => {
  return (
    <nav class="bg-white">
    <div class="px-2">
      <div class=" flex justify-end">
        <div class="absolute flex sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
          <div class="hidden sm:ml-6 sm:block ">
            <div class="flex ">
              
              <div className="flex">
                <a
                  href="#"
                  class="text-blue-500 hover:text-gray-300 px-[5px] py-2 text-[10px] font-medium"
                >
                  Print
                </a>
                <body class="relative">
                  <div class="absolute m-2 left-1/2 -ml-0.5 w-[1px] h-1/2 bg-black"></div>
                </body>
              </div>
              <div className="flex">
                <a
                  href="#"
                  class="text-blue-500 hover:text-gray-300 px-[5px] py-2 text-[10px] font-medium"
                >
                  New Window
                </a>
                <body class=" relative">
                <div class="absolute m-2 left-1/2 -ml-0.5 w-[1.5px] h-1/2 bg-black"></div>
                </body>
              </div>
              <div className="flex">
                <a
                  href="#"
                  class="text-blue-500 hover:text-gray-300 px-[5px] py-2 text-[10px] font-medium"
                >
                  Personalize Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavAddClass