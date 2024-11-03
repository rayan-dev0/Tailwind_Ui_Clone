import Profile from "./Profile";
import Calendar from "./Calendar";
import Controls from "./Controls";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { CgProfile } from "react-icons/cg";
import {
  MdHomeFilled,
  MdOutlineGroups,
  MdOutlinePayment,
} from "react-icons/md";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

const Main = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const Home = () => {
  return (
    <div className="transition-all duration-500">
      <SideBar />
      <div className="bg-black w-screen h-[13rem] md:bg-green-700 xl:bg-red-600 2xl:bg-blue-600"></div>
      <div className="w-full">
        <div className="grid grid-cols-12 md:grid-rows-2 grid-rows-1 lg:grid-cols-12 xl:grid-cols-14   gap-8 p-10">
          <div className=" md:col-start-2 col-start-4 lg:col-start-3 lg:col-span-2 xl:col-start-5 2xl:col-start-4 -translate-y-24 ">
            <Profile />
          </div>
          <div className=" md:col-start-7 md:row-start-1 xl:col-start-8 2xl:col-start-6 col-start-3 row-start-2 col-span-9 ">
            <Calendar />
          </div>
          <div className=" col-start-3 row-start-4 col-span-1 md:row-start-2 md:col-start-5 xl:col-start-7 2xl:row-start-1 2xl:col-start-10">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
};
const SideBar = () => {
  const [isopen, setisopen] = useState(false);
  const menu = [
    { names: "Home", link: "/", icon: MdHomeFilled },
    { names: "Webinars", link: "/", icon: PiUsersThreeDuotone },
    { names: "Billing", link: "/", icon: MdOutlinePayment },
    { names: "User Managemnt", link: "/", icon: MdOutlineGroups },
    { names: "Settings", link: "/", icon: IoSettingsSharp },
  ];

  if (!isopen) {
    return (
      <div>
        <div
          className={`bg-white shadow-md w-[25rem] h-screen fixed rounded-tr-2xl rounded-br-2xl z-10000  duration-500 `}
        >
          <div className="flex mt-5  justify-between px-5">
            <img
              className="h-[3rem] w-[10.5rem] rounded-lg hidden xl:block"
              src={Logo}
              alt=""
            />
            <CgProfile
              className="text-[3rem] cursor-pointer"
              onClick={() => setisopen(!isopen)}
            />
          </div>
          <div className="mt-10 ">
            {menu.map((menu, i) => (
              <div className="flex items-center justify-between xl:px-7 cursor-pointer m-5 py-3 rounded-2xl   hover:text-[#002a59] hover:bg-blue-200 ">
                <p className="text-2xl hidden xl:block">{menu.names}</p>
                <div className="text-2xl">{React.createElement(menu.icon)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-0 m-0">
      <div
        className={`bg-white shadow-md w-[4rem] xl:w-[25rem] h-screen fixed rounded-tr-2xl rounded-br-2xl  duration-500  `}
      >
        <div className="flex mt-5  justify-between px-5">
          <img
            className="h-[3rem] w-[10.5rem] rounded-lg hidden xl:block"
            src={Logo}
            alt=""
          />
          <CgProfile
            className="text-[3rem] cursor-pointer"
            onClick={() => setisopen(!isopen)}
          />
        </div>
        <div className="mt-10 ">
          {menu.map((menu, i) => (
            <div className="flex items-center justify-between xl:px-7 cursor-pointer m-5 py-3 rounded-2xl   hover:text-[#002a59] hover:bg-blue-200 ">
              <p className="text-2xl hidden xl:block">{menu.names}</p>
              <div className="text-2xl">{React.createElement(menu.icon)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
