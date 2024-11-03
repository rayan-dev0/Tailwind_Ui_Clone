import React from "react";
import { FaRegCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiMiniVideoCamera } from "react-icons/hi2";

const Calendar = () => {
  const data = [
    {
      time: "11:30",
      title: "UX Webinar",
      live: "live",
      icon: HiMiniVideoCamera,
    },
    {
      time: "11:30",
      title: "UX Webinar",
      live: "Upcoming",
      icon: HiMiniVideoCamera,
    },
    {
      time: "11:30",
      title: "UX Webinar",
      live: "Upcoming",
      icon: HiMiniVideoCamera,
    },
    {
      time: "11:30",
      title: "UX Webinar",
      live: "Upcoming",
      icon: HiMiniVideoCamera,
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col lg:justify-start xl:items-start">
        <p className="">Monday, 14 October</p>
        <p className="text-emerald-950 text-[1.5rem]">
          Good morning, Prabhleen!👋
        </p>
      </div>
      <div className="shadow-lg mt-10 rounded-2xl md:w-[25rem] xl:w-[30rem] ">
        <div className="rounded-2xl shadow-lg flex justify-between rounded-br-none rounded-bl-none  bg-[#f5f6f7] p-4 ">
          <div className="flex justify-center items-center  lg:m-2">
            <span>
              <FaRegCalendarAlt />
            </span>
            <p className=" ml-1 text-sm lg:px-5">Monday, 14 October 2024</p>
          </div>
          <div className="flex justify-center items-center">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col p-2 bg-white rounded-2xl rounded-tr-none rounded-tl-none">
          {data.map((data, i) => (
            <div className="mt-2 flex px-2 xl:px-4 xl:mt-3">
              <div className="">
                <p className="text-2xl">{data.time}</p>
                <p className="font-md">{data.time}</p>
              </div>
              <div className="mx-5 flex flex-col justify-center ">
                <div className="flex  items-center">
                  <p>{data.live}</p>
                  <span className="ml-1">
                    {React.createElement(data.icon, {
                      className: `${
                        data.live == "live" ? "text-green-500" : "text-red-500"
                      }`,
                    })}
                  </span>
                </div>
                <p>{data.title}</p>
              </div>
              {<hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
