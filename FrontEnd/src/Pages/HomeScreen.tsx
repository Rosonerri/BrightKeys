import TypeWriter from "typewriter-effect";
import img2 from "../assets/bgguitar.png";
import img3 from "../assets/pexels-thuyenvu-322719.jpg";
const HomeScreen = () => {
  return (
    <div
      className="min-h-[93vh] w-full flex justify-center items-center h-full relative"
      style={{
        backgroundImage: `url(${img3})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute w-full h-full opacity-[.9] flex justify-center items-center bg-black">
        <div className="w-[95%] h-full">
          <div className="grid md:grid-cols-1 w-full h-full grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className=" lg:text-[40px] font-[400] text-white text-[20px]">
                Don't Stop <br />
                Learning Till You're Fill with The <br />
                <TypeWriter
                  options={{
                    strings: ["Groove", "Vibe", "BrightKeys"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="font-bold mt-[10px] lg:mt-[45px] lg:mb-[45px] mb-[20px] text-[12px] lg:text-[19px] text-white">
                Choose and Listen from thousand of our already made playlist and
                never worry about changing your song while you work
              </div>
              <div className="lg:w-[90%] bg-white lg:h-[6%] p-2 flex justify-between rounded-md w-[95%] h-[20%] mb-[10px] text-[12px] md:text-[18px]">
                <input
                  type="text"
                  placeholder="Submit your details here"
                  className="flex-1 rounded-md outline-none bg-[white] font-[700] text-black"
                />
                <button className="text-[11px] p-1 ml-[10px] rounded-md md:px-4 bg-[#fe6484] hover:bg-pink-800 duration-300 transition-all hover:text-[black] font-[700] text-white lg:text-[15px]">
                  Register
                </button>
              </div>
            </div>
            <div className="bg-black grid grid-cols-2 w-[100%] h-[100%]">
              <div className="overflow-hidden object-contain">
                <img src={img2} alt="" />
              </div>
              <div className="bg-black">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
