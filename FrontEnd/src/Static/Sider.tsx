import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeToggle } from '../Global/reduxState';


const Sider = () => {
  const dispatch = useDispatch()
  const readToggle = useSelector((state: any) =>{
    return state.toggle
  })
  return (
    <div
      className="h-screen w-[200px] transition-all duration-500 fixed "
      style={{
        width: `${readToggle ? "200px" : "70px"}`,
      }}
    >
      <div className="h-[50px] flex justify-end">
        {readToggle ? (
          <div
            className="h-[50px] w-[50px] rounded-[50%] bg-slate-100 flex justify-center items-center cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          >
            <FaAngleDoubleLeft className="text-[35px] text-[blue]" />
          </div>
        ) : (
          <div
            className="h-[50px] w-[50px] rounded-[50%] bg-slate-100 flex justify-center items-center cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(true));
            }}
          >
            <FaAngleDoubleRight className="text-[35px] text-[blue]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sider