import { MdOutlinePiano, MdRestaurantMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { SlEvent } from "react-icons/sl";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeToggle, changeToggleDisplay } from "../Global/reduxState";
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle);

    const handleToggle = () => {
      if (!document.startViewTransition) {
        dispatch(changeToggle(!toggle));
      } else {
        document.startViewTransition(() => {
          dispatch(changeToggle(!toggle));

          const timer = setTimeout(() => {
            dispatch(changeToggleDisplay(!toggle));
            clearTimeout(timer);
          }, 150);
        });
      }
    };
  return (
    <div className="w-full h-[60px] bg-[#091227] flex justify-center items-center">
      <div className="w-[95%] h-full flex justify-between items-center">
        <div className="flex w-[15%] h-full items-center text-[white]">
          <div className="font-[700] text-[30px]">Bright</div>
          <div className="font-[700] text-[30px]">
            <MdOutlinePiano />
          </div>
        </div>
        <div className="w-[30%] font-[700] justify-between items-center text-[20px] text-[white] hidden xl:flex cursor-pointer">
          <div>About</div>
          <div>Career</div>
          <div>Pricing</div>
          <div>Support</div>
        </div>
        <div className="lg:w-[14%] font-[700] justify-between items-center text-[18px] text-[white] hidden xl:flex">
          <Link to="/sigin">
            <button className="p-1 rounded-md px-4 bg-[#fe6484] hover:bg-[pink] duration-300 transition-all hover:text-[black]">
              Sign-In
            </button>
          </Link>
          <Link to="/register">
            <button className="p-1 rounded-md px-4 bg-[#fe6484] hover:bg-[pink] duration-300 transition-all hover:text-[black]">
              Register
            </button>
          </Link>
        </div>
        {toggle ? (
          <div className="text-[30px] xl:hidden cursor-pointer text-white">
            <MdRestaurantMenu
              onClick={handleToggle}
              className={`transition-all duration-300`}
            />
          </div>
        ) : (
          <div className="text-[30px] xl:hidden cursor-pointer text-white font-[700]">
            <CiMenuFries
              className={`transition-all duration-300`}
              onClick={handleToggle}
            />
          </div>
        )}
      </div>
      {toggle && (
        <div
          className={`flex w-full fixed top-0 xl:hidden z-30 ${
            toggle ? "left-0" : "-left-[30rem]"
          }`}
        >
          <div
            className={`w-[50%] h-[100vh] justify-center items-center flex absolute ${
              toggle ? "left-0" : "-left-[30rem]"
            }`}
            style={{
              background: "rgba( 157, 200, 355, 0.69 )",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <div className="w-[80%] h-[90%]">
              <div className="flex w-[15%] items-center text-[white]">
                <div className="font-[700] text-[30px]">Bright</div>
                <div className="font-[700] text-[30px]">
                  <MdOutlinePiano />
                </div>
              </div>
              <div className="mt-[30px] flex justify-center items-center font-[700]">
                <Link to="/Register">
                  <button className="xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white  hover:bg-white hover:text-blue-950 duration-300 transition-all">
                    Register
                  </button>
                </Link>
                <Link to="/sigin">
                  <button className="xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white  hover:bg-white hover:text-blue-950 duration-300 transition-all ml-[10px]">
                    Sign-In
                  </button>
                </Link>
              </div>

              <Link to="/aboutUs">
                <div className="mt-[30px] flex justify-between items-center font-[700] p-2 hover:bg-white rounded-[20px] cursor-pointer transition-all duration-300">
                  <p>About Us</p>
                  <BsCalendarEvent className="text-[25px] text-blue-950" />
                </div>
              </Link>
              <div className="mt-[30px] flex justify-between items-center font-[700] p-2 hover:bg-white rounded-[20px] cursor-pointer transition-all duration-300">
                <p>Event Single</p>
                <SlEvent className="text-[25px] text-blue-950" />
              </div>
              <div className="mt-[30px] flex justify-between items-center font-[700] p-2 hover:bg-white rounded-[20px] cursor-pointer transition-all duration-300">
                <p>Schedule</p>
                <GrSchedule className="text-[25px] text-blue-950" />
              </div>
              <div className="mt-[30px] flex justify-between items-center font-[700] p-2 hover:bg-white rounded-[20px] cursor-pointer transition-all duration-300">
                <p>Classes</p>
                <SiGoogleclassroom className=" text-[25px] text-blue-950" />
              </div>
              <div className="mt-[30px] flex justify-between items-center font-[700] p-2 hover:bg-white rounded-[20px] cursor-pointer transition-all duration-300">
                <p>Teachers</p>
                <GiTeacher className="text-[25px] text-blue-950" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


 