import bird from "../assets/Rectangle 27.png";
import icon from "../assets/icon.svg";
const Vision = () => {
  return (
    <div className="block md:flex justify-center gap-10 mt-14">
      <div className="px-3 mt-4 w-full md:w-[500px] capitalize">
        <div className="py-2">
          <h2 className="font-bold">our vision</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime
            natus vel, illo reprehenderit repellat commodi aut inventore! Error
          </p>
        </div>
        <div className="py-2">
          <h2 className="font-bold">our mission</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime
            natus vel,
          </p>
          <nav>
            <div className="list-none">
              <li className="flex items-start gap-2 py-3">
                <img src={icon} alt="" />
                Preserving the full range of Nigeria’s biodiversity which
                include species, ecosystems and genetic biodiversity.
              </li>
              <li className="flex items-start gap-2 py-3">
                <img src={icon} alt="" />
                Preserving the full range of Nigeria’s biodiversity which
                include species, ecosystems and genetic biodiversity.
              </li>
              <li className="flex items-start gap-2 py-3">
                <img src={icon} alt="" />
                Preserving the full range of Nigeria’s biodiversity which
                include species, ecosystems and genetic biodiversity.
              </li>
            </div>
          </nav>
        </div>
      </div>
      <div className="px-3 py-3">
        <img
          src={bird}
          alt=""
          className="md:w-[500px] h-[400px] px-3 object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Vision;
