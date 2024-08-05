import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import img from "../assets/Victorial Orienze.jpeg"
import img4 from "../assets/Asake.jpg";
import img3 from "../assets/Faouzia.jpg";
import img2 from "../assets/JohnLegend.jpg";
import { FaPlay } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import MusicProps from '../Props/MusicProps';
const UserDashoard = () => {
  return (
    <div className="font-[700] w-full bg-slate-200 min-h-[90%] grid md:grid-cols-10 grid-cols-1">
      <div className="h-screen bg-black col-span-8 grid grid-rows-10">
        <div className="bg-white row-span-1 flex justify-center items-center">
          <div className="w-[95%] h-full flex justify-between">
            <div>
              <div className="font-[700] text-[25px]">Hi, Tobez</div>
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
                <IoIosNotifications className="text-[35px] text-[blue]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white row-span-4 flex justify-center items-center">
          <div className="bg-green-600 border min-h-[70%] w-[95%] grid md:grid-cols-4 grid-cols-2 gap-2">
            <div className="bg-blue-950">
              <MusicProps
                genre="Gospel"
                image={img}
                musicType="Hit"
                icon={<FaPlay />}
              />
            </div>
            <div className="bg-blue-900">
              <MusicProps
                genre="Hip-Hop"
                image={img3}
                musicType="Playlist"
                icon={<FaPlay />}
              />
            </div>
            <div className="bg-blue-800">
              <MusicProps
                genre="R & B"
                image={img2}
                musicType="Hit"
                icon={<FaPlay />}
              />
            </div>
            <div className="bg-blue-800">
              <MusicProps
                genre="Afro-Beat"
                image={img4}
                musicType="Hit"
                icon={<FaPlay />}
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-950 row-span-5"></div>
      </div>
      <div className="h-screen bg-green-600 col-span-2"></div>
    </div>
  );
}

export default UserDashoard
