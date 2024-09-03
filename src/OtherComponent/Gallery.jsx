import { Link } from "react-router-dom";
import poster from "../assets/Rectangle 35.png";
import white from "../assets/Rectangle 38.png";
import Layout from "../HomepageComponent/Layout";
const Gallery = () => {
  return (
    <Layout>
      <div className="">
        <div className="border bg-[url('./assets/Rectangle26(1).png')]  flex items-center justify-start h-[400px] bg-cover bg-center text-white">
          <div className="">
            <div className="md:ml-32 ml-5 ">
              <h1 className="font-bold">Gallery</h1>
              <p>
                {" "}
                <Link to="/">Home</Link> &gt;&gt;{" "}
                <span className="text-[#092226]">Gallery</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="block md:flex flex-wrap justify-center gap-3 mt-14 px-3">
          <img src={white} alt="" className="md:w-[30%] w-full" />
          <img src={poster} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={white} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={poster} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={white} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={poster} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={white} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={poster} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
          <img src={white} alt="" className="md:w-[30%] w-full mt-3 md:mt-0" />
        </div>
        <button className="block py-2 px-3 rounded bg-[#046313] text-white my-4  mx-auto capitalize">
          <Link to="/GalleryTwo">load more</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Gallery;
