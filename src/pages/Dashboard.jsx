import qrImg from "../assets/qr-code.png";
import Navbar from "../layout/Navbar";
import ellipse1Img from "../assets/Ellipse1.png";
import ellipse2Img from "../assets/Ellipse2.png";
import ellipse3Img from "../assets/Ellipse3.png";
import ellipse4Img from "../assets/Ellipse4.png";
const Dashboard = () => {
    return (
        <div>
        <Navbar/>

        <div className="px-28 flex flex-row justify-between bg-black h-screen pt-20">

        <div>
        <img src={ellipse3Img} alt="" className=""/>
        <img src={ellipse4Img} alt="" className=""/>
        </div>

        <div>
        <p className="text-white font-bold text-6xl">PoLink Wallet</p>
        <div className="flex flex-row items-center justify-center space-x-6 p-6">
        <p className="text-black bg-gradient-to-r from-[#37DD00] to-[#73E74D] px-6 py-3 rounded-full text-md font-bold">INSTALL NOW</p>
        <img src={qrImg} alt="" className=""/>
        </div>
        </div>
        
        <div>
        <img src={ellipse1Img} alt="" className=""/>
        <img src={ellipse2Img} alt="" className=""/>
        </div>
      </div>
        </div>
      
    )
}

export default Dashboard;