import React, { FC, ReactNode } from 'react'
interface iMusic{
    image: string
    musicType: string
    genre: string
    icon: ReactNode
}

const MusicProps: FC<iMusic> = ({image, musicType, genre, icon}) => {
  return (
    <div className="h-[100%] w-[100%] bg-slate-300 flex justify-center flex-col items-center">
      <div className="h-[255px] border w-[95%] rounded-md overflow-hidden">
        <img src={image} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="w-[95%] h-[70px] rounded-md flex justify-between items-center">
        <div className="">
          <div className="text-[blue]">{musicType}</div>
          <div className="mt-3">{genre}</div>
        </div>
        <div>
          <div className="h-[50px] w-[50px] rounded-[50%] bg-slate-200 flex justify-center items-center">
            <div className="h-[40px] w-[40px] rounded-[50%] bg-blue-900 flex justify-center items-center">
              <div className='text-[white]'>{icon}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicProps
