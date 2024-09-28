import ellipse7 from "../assets/Ellipse 7.png";
import ellipse8 from "../assets/Ellipse 8.png";
import middle from "../assets/center bar thing.png";

const Objective = () => {
  return (
    <div className="mt-6 px-2">
      <h1 className="text-center capitalize font-bold py-3 text-xl">
        our objectives
      </h1>
      <div className=" block md:flex justify-center gap-4 px-4 mt-4 py-3">
        <div className="md:h-[400px] md:flex items-end">
          <div className=" flex items-center gap-3 ">
            <img src={ellipse8} alt="" className="w-16 h-16 hidden md:block" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              nesciunt architecto aperiam, itaque nisi quas laborum labore.
              Voluptates, aperiam iure doloribus laboriosam nostrum quis
              quibusdam saepe vero in modi! Cupiditate.
            </p>
          </div>
        </div>
        <div className="hidden md:h-[400px]  md:flex   w-20 ">
          <img src={middle} alt="" />
        </div>
        <div className="md:h-[400px] md:flex items-start py-4 mt-6 md:mt-0">
          <div className=" flex items-center gap-3 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nemo mollitia quod optio corporis recusandae, sunt
              et nulla qui culpa sequi laboriosam placeat fugit ducimus. Animi
              saepe excepturi tempore voluptatum.
            </p>
            <img src={ellipse7} alt="" className="w-16 h-16 hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
