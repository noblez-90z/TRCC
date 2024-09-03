const Hero = () => {
  return (
    <div className="flex items-center justify-start  w-full h-[600px] bg-cover bg-center bg-no-repeat bg-[url('./assets/Rectangle2.png')] ">
      <div className=" w-[350px] block md:ml-32 px-3 py-4 uppercase text-white">
        <h2 className="py-3 font-bold">dedicated to</h2>
        <h1 className="font-bold text-3xl  text-wrap py-4 ">
          safeguarding tropical resources for generations.
        </h1>
        <div className="flex gap-4">
          <button className=" py-2 px-3 capitalize rounded font-semibold bg-[#046313] text-white">
            join us
          </button>
          <button className=" py-2 px-3 capitalize rounded font-semibold bg-white text-black ">
            discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
