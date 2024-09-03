import middle from "../assets/Rectangle 13.png";
import topUp from "../assets/Rectangle 16.png";
import sidetopUp from "../assets/Rectangle 14.png";
import topDown from "../assets/Rectangle 17.png";
import sideDown from "../assets/Rectangle 15.png";

const Action = () => {
  return (
    <div className="">
      <h2 className="py-6 text-center font-bold capitalize">
        see us in action
      </h2>
      <div className="block md:flex  py-6 px-4 mb-10 ">
        <div className=" md:h-[full] block">
          <img src={topUp} alt="" />
          <img src={topDown} alt="" />
        </div>
        <div className=" md:h-[full] mt-2 md:mt-0">
          <img src={middle} alt="" />
        </div>
        <div className=" md:h-[full] mt-2 md:mt-0">
          <img src={sidetopUp} alt="" />
          <img src={sideDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Action;
