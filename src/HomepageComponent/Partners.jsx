import ecosheild from "../assets/ecoshield 5.png";
const Partners = () => {
  return (
    <div className="my-6 py-3">
      <h1 className="text-center font-bold capitalize py-2 ">our partners</h1>
      <div className="flex  md:h-[200px] py-4">
        <img src={ecosheild} alt="" className="w-[20%] md:py-2" />
        <img src={ecosheild} alt="" className="w-[20%] md:py-2" />
        <img src={ecosheild} alt="" className="w-[20%] md:py-2" />
        <img src={ecosheild} alt="" className="w-[20%] md:py-2" />
        <img src={ecosheild} alt="" className="w-[20%] md:py-2" />
      </div>
    </div>
  );
};

export default Partners;
