import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const UserDashoard = () => {
  return (
    <div className="font-[700] w-full bg-slate-200 h-screen grid grid-cols-10">
      <div className="h-screen bg-black col-span-8 grid grid-rows-10">
        <div className="bg-white row-span-1 flex justify-center items-center">
          <div className="w-[95%] h-full flex justify-between">
            <div>
              <div className="font-[700] text-[25px]">Hi, Angelica</div>
              <div className="font-[200] text-[12px] md:text-[19px]">
                Welcome Back! What are you up to today?
              </div>
            </div>
            <div className="w-[35%] flex justify-between items-center">
              <div className="border h-[45px] rounded-[30px] w-[350px] bg-pink-500 overflow-hidden justify-center items-center hidden lg:flex">
                <CiSearch className="text-[11px] w-[50px] h-full text-[blue] bg-white" />
                <input
                  type="text"
                  className="flex-1 h-full outline-none text-blue-950 text-[12px]"
                  placeholder="Search Something"
                />
              </div>
              <div className="h-[50px] w-[50px] rounded-[50%] bg-slate-100 flex justify-center items-center ml-[70px] md:ml-[100px] lg:ml-0">
                <IoIosNotifications className='text-[35px] text-[blue]'/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-600 row-span-4"></div>
        <div className="bg-blue-950 row-span-5"></div>
      </div>
      <div className="h-screen bg-green-600 col-span-2"></div>
    </div>
  );
}

export default UserDashoard
