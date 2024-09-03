import { Link } from "react-router-dom";
import logo from "../assets/TRCC_LOGO 1.svg";

const Footer = () => {
  return (
    <div className="block md:flex gap-4 px-6 md:h-[300px] pt-6 capitalize bg-[#092226]">
      <div className="">
        <div className="text-white">
          <img src={logo} alt="" className="w-10" />
          <h1 className="font-bold">
            tropical reasearch and conservation center
          </h1>
        </div>
        <p className="py-6 text-wrap text-white">
          agriculture, environment, community health, preservation of indigenous
          resources.
        </p>
      </div>
      <div className="md:ml-6">
        <h1 className="font-bold py-3 text-white">explore</h1>
        <nav>
          <div className="list-none text-[#727272]">
            <li className="py-3">
              <Link to="/AboutUs">About</Link>
            </li>
            <li className="py-3">
              <Link to="#">get involved</Link>
            </li>
            <li className="py-3">
              <Link to="Gallery">gallery</Link>
            </li>
          </div>
        </nav>
      </div>
      <div className="md:ml-6">
        <h1 className="font-bold py-3 text-white">contact</h1>
        <nav>
          <div className="list-none text-[#727272]">
            <li className="py-3">+234(0)7058567452</li>
            <li className="py-3">
              <Link mailto="mailto:donnellnoblez@gmail.com">
                contact@donnellnoblez.com
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
