import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="md:h-[500px] bg-[#f2f2f2]">
      <h1 className="text-xl capitalize font-bold text-center py-4">
        our projects
      </h1>
      <div className="block mx-auto md:flex gap-3 px-2 capitalize">
        <div className=" rounded-xl h-[400px] text-center flex items-end text-white bg-[url('./assets/Rectangle8.png')]">
          <div className="py-3 px-4">
            <h2 className="font-bold py-2">fertilizer production</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              minima qui sunt eveniet,
            </p>
            <p className="py-3 underline ">
              <Link>veiw product</Link>
            </p>
          </div>
        </div>

        <div className=" rounded-xl h-[400px] text-center flex items-end  text-white mt-3 md:mt-0 bg-[url('./assets/Rectangle7(1).png')]">
          <div className="py-3 px-4">
            <h2 className="font-bold py-2">environmental documentation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              minima qui sunt eveniet,
            </p>
            <p className="py-3 underline">
              <Link>veiw product</Link>
            </p>
          </div>
        </div>
        <div className=" rounded-xl h-[400px] text-center flex items-end text-white mt-3 md:mt-0 bg-[url('./assets/Rectangle7(1).png')]">
          <div className="">
            <h2 className="font-bold py-2">HIV Sensitization movements</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              minima qui sunt eveniet,
            </p>
            <p className="py-3 underline">
              <Link>veiw product</Link>
            </p>
          </div>
        </div>
        <div className=" rounded-xl   h-[400px] text-center flex items-end text-white mt-3 md:mt-0 bg-[url('./assets/Rectangle8.png')]">
          <div className="">
            <h2 className="font-bold py-2">tree planting campaign</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              minima qui sunt eveniet,
            </p>
            <p className="py-3 underline">
              <Link>veiw product</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
