import bird from "../assets/Rectangle 27.png";
import pple from "../assets/Rectangle 12.png";
const Started = () => {
  return (
    <div className="h-[1000px] md:h-[600px] relative">
      <h2 className=" py-5 px-3 md:py-0 w-full md:w-fit md:ml-32 absolute md:top-10 capitalize  text-left  font-bold text-xl">
        how we <br /> started
      </h2>
      <div className="">
        <div className=" text-center absolute md:left-6 top-80 md:top-28">
          <img
            src={bird}
            alt=""
            className=" md:w-[500px] h-[400px] px-3 object-cover w-full"
          />
        </div>
        <div className="py-2 absolute md:right-20 top-24 md:top-0  w-full md:w-[600px]">
          <p className="px-3 md:py-3 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit consequuntur in soluta aliquam fugit corporis cum ex eligendi
            ab. Incidunt nesciunt vero labore? Harum illo repellendus
            perspiciatis laborum. Officiis?
          </p>{" "}
          <br />
          <p className="px-3 font-semibold">
            Incidunt nesciunt vero labore? Harum illo repellendus perspiciatis
            laborum. Officiis?
          </p>
          <img
            src={pple}
            alt=""
            className="object-contain px-3 mt-96 pt-24 md:pt-0 md:mt-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Started;
