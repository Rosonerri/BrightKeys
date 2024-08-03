import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import { useSelector } from "react-redux";

const Layout2: FC = () => {
  const readToggle = useSelector((state: any) => state.toggle)
  return (
    <div>
      <div className="flex">
        <div className="hidden md:flex transition-all duration-500">
          <Sider />
        </div>
        <div className="w-full flex justify-end">
          <div
            className={`w-full md:w-[cal(100%-200px)] transition-all duration-300 cursor-pointer`}
            style={{
              width: `${
                readToggle ? "calc(100% - 200px)" : "calc(100% - 70px)"
              }`,
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
