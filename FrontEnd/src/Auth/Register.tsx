import React from "react";
import img from "../assets/bgguitar.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdAppRegistration, MdEmail, MdPerson2 } from "react-icons/md";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="bg-[#091227] h-[100vh] w-full flex justify-center items-center">
      <div className="w-[1000px] h-[85%] md:h-[85%] lg:h-[90%] bg-[rgb(129, 129, 39)] rounded-[10px] grid grid-cols-1 md:grid-cols-5 overflow-hidden shadow-md">
        <div className="hidden md:flex md:col-span-2">
          <img src={img} alt="" />
        </div>
        <div className="md:bg-white md:col-span-3 flex justify-center items-center">
          <div className="bg-white w-[90%] border h-[93%] flex justify-center flex-col items-center md:h-[90%] shadow-md rounded-md">
            <div className="font-bold mt-[15px]">Create your free Account</div>
            <div className="w-[80%] h-[95%] ">
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Full Name</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Enter your full name here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
              </div>
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
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Re-Enter Password</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Re-Enter your password here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                {" "}
                <button className="xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white  hover:bg-white hover:text-blue-950 duration-300 transition-all">
                  Create Account
                </button>
              </div>
              <div className="mt-[15px] flex">
                <div className="text-[11px] italic mr-[5px]">
                  Already Have An Account?
                </div>
                <Link to="/sigin">
                  <div className="text-[10px] italic font-semibold text-yellow-700 border md:text-[14px]">
                    SignIn
                  </div>
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                <div className="h-[1px] w-[100px] bg-[grey] mr-[5px]" />
                <div className="mr-[5px]">OR</div>
                <div className="h-[1px] w-[100px] bg-[grey]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
