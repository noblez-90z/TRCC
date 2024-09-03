import Gpeople from "../assets/Rectangle 12.png";
import tickMark from "../assets/Tick02.svg";
const Purpose = () => {
  return (
    <div className="relative md:flex   h-[550px] capitalize   py-4 px-6 ">
      <div className="block w-[320px] md:w-[40%]  absolute bottom-2 md:top-14 right-4 md:left-8  h-fit ">
        <img src={Gpeople} alt="" className="md:h-[400px] w-[full]  " />
      </div>
      <div className="block absolute top-2 md:top-32 md:right-1 md:w-[50%]">
        <h2 className="font-bold py-2 md:text-3xl">our purpose</h2>
        <nav>
          <div className="list-none">
            <li className="flex gap-3 items-center py-2">
              <img
                src={tickMark}
                alt=""
                className="bg-[#046313] rounded-full w-5"
              />
              agricultural production
            </li>

            <li className="flex gap-3 items-center py-2">
              <img
                src={tickMark}
                alt=""
                className="bg-[#046313] rounded-full w-5"
              />
              community health/ livelihood
            </li>
            <li className="flex gap-3 items-center py-2">
              <img
                src={tickMark}
                alt=""
                className="bg-[#046313] rounded-full w-5"
              />
              supporting vulnerable groups
            </li>
            <li className="flex gap-3 items-center py-2">
              <img
                src={tickMark}
                alt=""
                className="bg-[#046313] rounded-full w-5"
              />
              environment
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Purpose;
