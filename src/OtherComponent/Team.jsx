import dylan from "../assets/Ellipse 15.png";
import iris from "../assets/Ellipse 16.png";
import mount from "../assets/Ellipse 17.png";

import { Link } from "react-router-dom";
const Team = () => {
  return (
    <div className="capitalize mt-4">
      <h2 className="font-bold text-center py-3">meet the team</h2>
      <div className=" block  md:flex justify-between gap-4  text-center  mt-4">
        <div className=" text-center ">
          <img src={dylan} alt="" className="w-[50%] mx-auto" />
          <h4 className="font-bold text-2xl">dylan myers</h4>
          <p className="font-light">co-founder</p>
        </div>
        <div className="mt-3 md:mt-0">
          <img src={iris} alt="" className="w-[50%] mx-auto" />
          <h4 className="font-bold text-2xl">iris sawyers</h4>
          <p className="font-light">manager</p>
        </div>
        <div className="mt-3 md:mt-0">
          <img src={mount} alt="" className="w-[50%] mx-auto" />
          <h4 className="font-bold text-2xl">meet nuel</h4>
          <p className="font-light">design lead</p>
        </div>
      </div>
      <div className="block mx-auto w-full mt-3 md:flex justify-center gap-3 py-3 px-3 capitalize text-center text-white ">
        <div className="h-[300px] w-full flex justify-center items-center bg-[url('./assets/Rectangle29.png')] bg-center rounded-lg">
          <div className="">
            <h1 className="font-bold py-2">what we do</h1>
            <Link className="underline">see what we do</Link>
          </div>
        </div>
        <div className="h-[300px] w-full flex justify-center items-center mt-3 md:mt-0 bg-[url('./assets/Rectangle29(1).png')] bg-center bg-cover rounded-lg">
          <div className="">
            <h1 className="font-bold py-2">our project</h1>
            <Link className="underline">see our project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
