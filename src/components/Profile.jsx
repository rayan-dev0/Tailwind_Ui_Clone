import React from "react";
import pfp from "../assets/pfp.png";

const Profile = () => {
  return (
    <div className="">
      <div className="bg-white shadow-md flex flex-col justify-center items-center h-[20rem] w-[15rem] rounded-3xl ">
        <img className="h-[7rem] w-[7rem] rounded-xl " src={pfp} alt="" />
        <p className="font-bold mt-1">Prabhleen Kaur</p>
        <p className="mt-3 text-gray-500">Prabhleen@gmail.com</p>
        <p className="text-gray-500 ">9899999882</p>
        <p className="text-gray-500 mt-3">Delhi,India</p>
      </div>
    </div>
  );
};

export default Profile;
