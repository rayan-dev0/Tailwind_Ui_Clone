import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaCalendarPlus } from "react-icons/fa6";
import { FiFilm } from "react-icons/fi";

const Controls = () => {
  return (
    <div>
      <div className="shadow-md  w-[15rem] h-[14rem] m-10 rounded-2xl">
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className=" h-[3rem] w-[3.5rem] bg-teal-500 rounded flex flex-col justify-center items-center transform-all duration-500 hover:-translate-y-1 ">
            <div className="text-2xl">
              <FiFilm />
            </div>
          </div>
            <p className="text-sm">Schedule a Webinar</p>
          <div className="h-[3rem] w-[3.5rem] bg-teal-500 rounded flex flex-col justify-center items-center transform-all duration-500 hover:-translate-y-1 ">
            <div className="text-2xl">
              <FaCalendarPlus />
            </div>
          </div>
            <p className="text-sm">Join a Webinar</p>
          <div className=" h-[3rem] w-[3.5rem] bg-teal-500 rounded flex flex-col  justify-center items-center transform-all duration-500 hover:-translate-y-1 ">
            <div className="text-2xl">
              <IoMdAdd />
            </div>
          </div>
            <p className="text-sm">Open Recording</p>
        </div>
      </div>
    </div>
  );
};

export default Controls;
