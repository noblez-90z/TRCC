import people from "../assets/Rectangle 4.png";
const About = () => {
  return (
    <div className="relative md:flex   h-[550px] capitalize   py-4 px-6  ">
      <div className=" block w-[320px] md:w-[40%]  absolute bottom-2 md:top-14 right-4 md:left-8  h-fit  ">
        <img src={people} alt="" className="md:h-[400px] w-[full]  " />
      </div>
      <div className="block absolute mt-3 md:mt-0 top-2 md:top-32 md:right-1 md:w-[50%]">
        <h2 className="font-bold py-2 md:text-3xl text-[#3e676e]">
          welcome to tropical research & concersation center.
        </h2>
        <p className="py-2">
          Our centre promotes sustainable agriculture practices to ensure food
          security, income generation and enhance living conditions of the
          najority of people depending on agricultural prouction for sustenance.{" "}
        </p>
        <button className=" py-2 px-3 my-3 capitalize rounded font-semibold bg-[#046313] text-white">
          read more
        </button>
      </div>
    </div>
  );
};

export default About;
