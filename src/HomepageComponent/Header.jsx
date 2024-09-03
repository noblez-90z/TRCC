import { Link } from "react-router-dom";
import logo from "../assets/TRCC_LOGO 1.svg";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import menu from "../assets/menu-02.svg";

const Header = () => {
  const services = [
    { item: "home", path: "/" },
    { item: "about us", path: "/About" },
    { item: "our objective", path: "#objective" },
    { item: "gallery", path: "/Gallery" },
    { item: "contact us", path: "#contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" relative flex justify-between items-center w-full h-16 capitalize md:px-4 py-2 shadow-lg bg-white">
      <div className="w-12 md:w-14">
        <img src={logo} alt="" className="w-12 md:w-14" />
      </div>
      <div
        onClick={handleMenu}
        className="  block md:hidden absolute top-2 right-2 h-5"
      >
        <img src={menu} alt="" />
      </div>
      <div
        className={`  block  md:flex md:justify-between md:items-center mt-80 mr-12 md:mr-0 md:mt-0 w-full md:w-[70%] bg-white rounded-lg text-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <div className="block md:flex list-none gap-4 text-[#046313] ">
            {services.map((service, index) => (
              <li key={index} className="py-3 md:py-0">
                <Link to={service.path}>{service.item} </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="">
          <button className="my-2 md:my-0 py-2 px-3 capitalize rounded bg-[#046313] text-white">
            donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
