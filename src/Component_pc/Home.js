import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
const Home = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center my-3 bg-blue-600 py-4 text-white">
        {" "}
        System for control Data in Database
      </h1>

      <div className="grid lg:grid-cols-2 gap-1 md:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto ">
        <div className="card bg-blue-900 row-span-3 hover:bg-blue-500  flex items-center justify-around mt-4 rounded-xl  text-white ">
          <div className="flex justify-center ">
            <AiOutlineHome className="font-bold text-9xl hover:bg-blue-400 px-4   rounded-md " />
          </div>
        </div>
        <Link to="/user">
          <div className="card bg-blue-900 hover:bg-blue-500  flex items-center justify-around mt-4 rounded-xl  text-white">
            <div className="flex justify-center">
              <AiOutlineUser className="font-bold text-9xl hover:bg-blue-400 px-4   rounded-md " />
            </div>
          </div>
        </Link>
        <div className="card bg-blue-900 hover:bg-blue-500  flex items-center justify-around mt-4 rounded-xl  text-white">
          <div className="flex justify-center ">
            <RiComputerLine className="font-bold text-9xl hover:bg-blue-400 px-4   rounded-md " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
