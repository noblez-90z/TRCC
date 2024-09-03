import Layout from "../HomepageComponent/Layout";
import Started from "./Started";
import Team from "./Team";
import Vision from "./Vision";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-[url('./assets/Rectangle26.png')]  flex items-center justify-start h-[400px] bg-cover bg-center text-white">
        <div className="">
          <div className="md:ml-32 ml-5 ">
            <h1 className="font-bold">About us</h1>
            <p>
              {" "}
              <Link to="/">Home</Link> &gt;&gt;{" "}
              <span className="text-[#092226]">About us</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <Started />
      <Vision />
      <Team />
    </Layout>
  );
};

export default AboutUs;
