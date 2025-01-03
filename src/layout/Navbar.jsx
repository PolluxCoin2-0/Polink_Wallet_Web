import logoImg from "../assets/Logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-between px-28 bg-black p-4">

          <div className="flex flex-row space-x-4 items-center">
            <img src={logoImg} alt="main-logo" className=""/>
            <p className="text-[#D9D9D9] text-xl font-semibold font-poppins">PoLink</p>
          </div>

          <div className="flex flex-row space-x-10 items-center">
          <p className="text-[#D9D9D9] text-lg font-medium font-poppins">Developer</p>
          <p className="text-[#D9D9D9] text-lg font-medium font-poppins">Help</p>
          <p className="text-white"><FaXTwitter size={20}/></p>
          <p className="text-white"><FaTelegramPlane size={24}/></p>
          </div>
        </div>
    )
}

export default Navbar;
