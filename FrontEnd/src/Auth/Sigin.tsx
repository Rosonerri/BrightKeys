import img from "../assets/bgguitar.png";
import { MdEmail, MdPerson2 } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const Sigin = () => {
  return (
    <div className="bg-[#091227] h-[100vh] w-full flex justify-center items-center">
      <div className="w-[1000px] h-[100%] md:h-[80%] lg:h-[90%] bg-[rgb(129, 129, 39)] rounded-[10px] grid grid-cols-1 md:grid-cols-5 overflow-hidden shadow-md">
        <div className="hidden md:flex md:col-span-2">
          <img src={img} alt="" />
        </div>
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="w-[90%] border h-[70%] flex justify-center flex-col items-center md:h-[90%] shadow-md rounded-md bg-white">
            <div className="font-bold">Sign In Here</div>
            <div className="w-[80%] h-[70%]">
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Email</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdEmail className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Enter your email here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                <div className="text-[11px] font-[700] mt-1 ml-[315px] text-red-600">
                  Email must be filled
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Password</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Enter your password here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
                <div className="text-[11px] ml-[330px] text-red-600 font-[700]">
                  Password Empty
                </div>
              </div>

              <div className="w-full flex justify-center items-center mt-[25px]">
                {" "}
                <button className="p-1 rounded-md px-4 bg-blue-950 hover:bg-[white] hover:border hover:text-blue-950 duration-300 transition-all text-white">
                  Sign-In
                </button>
              </div>
              <div className="mt-[15px] flex">
                <div className="text-[11px] italic mr-[5px]">
                  You Don't Have An Account?
                </div>
                <Link to="/register">
                  <div className="text-[10px] italic font-semibold text-blue-950">
                    SignUp
                  </div>
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                <div className="h-[1px] w-[100px] bg-[grey] mr-[5px]" />
                <div className="mr-[5px]">OR</div>
                <div className="h-[1px] w-[100px] bg-[grey]" />
              </div>
              <div className="flex md:w-full md:justify-around mt-[20px] text-[15px] justify-around gap-1">
                <div className="text-[10px] italic font-semibold text-blue-950 border p-2 rounded-md flex cursor-pointer">
                  <div className="text-[16px] mr-1">
                    <FcGoogle />
                  </div>
                  <div className="text-[13px]">Google</div>
                </div>
                <div className="text-[10px] italic font-semibold text-blue-950 flex border justify-center items-center rounded-md p-1 cursor-pointer">
                  <div className="text-[16px] mr-1">
                    <FaFacebook />
                  </div>
                  <div className="text-[13px]">Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
