import PlaceOrder from "./PlaceOrder";
import DanhMuc from "./DanhMuc";
import TaiSan from "./TaiSan";
import SoLenh from "./SoLenh";
import React, { useState } from "react";
const HomeRight = () => {
  
  const [showSL, setShowSL] = useState(true);
  const [showDM, setShowDM] = useState(false);
  const [showTS, setShowTS] = useState(false);
  const [colorSL,setColorSL] = useState("text-[orange] bg-[#2f3240]")
  const [colorDM,setColorDM] = useState("text-[white]")
  const [colorTS,setColorTS] = useState("text-[white]")
  const [screen,setScreen] = useState("relative")
  const [footer,setFooter] = useState("")
  const handleShowSL =() =>{
    setShowSL(true)
    setShowDM(false);
    setShowTS(false);
    setColorSL("text-[orange] bg-[#2f3240]")
    setColorDM("text-[white]")
    setColorTS("text-[white]")
    setScreen("")
    setFooter("")
  }
  const handleShowDM =() =>{
    setShowSL(false)
    setShowDM(true);
    setShowTS(false);
    setColorSL("text-[white] ")
    setColorDM("text-[orange] bg-[#2f3240]")
    setColorTS("text-[white]")
    setScreen("")
    setFooter("")
  }
  const handleShowTS =() =>{
    setShowSL(false)
    setShowDM(false);
    setShowTS(true);
    setColorSL("text-[white]")
    setColorDM("text-[white]")
    setColorTS("text-[orange] bg-[#2f3240]")
    setScreen("")
    setFooter("")
  }
  const handleClick = ()=>{
    setColorSL("text-[white]")
    setColorDM("text-[white]")
    setColorTS("text-[white]")
    setScreen("hidden")
    setFooter("right-[350px]")
  }
  return (
    <div className={` h-screen relative`}>
      <div className={`body ${screen === "hidden"? "hidden" : ""}`}>
        <div>
          <div>{showSL && <SoLenh handleCollapse={handleClick} />}</div>
          <div>{showDM && <DanhMuc handleCollapse={handleClick}/>}</div>
          <div>{showTS && <TaiSan handleCollapse={handleClick}/>}</div>
        </div>
        <div className="fixed bottom-5">
          <PlaceOrder />
        </div>
      </div>
      <div className={`footer flex justify-between items-center text-sm bg-[#131722] fixed w-[400px] bottom-0 text-white ${footer } `}>
        <button
          className={`text-center basis-1/3 py-1 ${colorSL}`}
          onClick={handleShowSL}
        >
          Sổ lệnh
        </button>
        <button className={`text-center basis-1/3 py-1 ${colorDM}` } onClick={handleShowDM}>
          Danh mục
        </button>
        <button className={`text-center basis-1/3 py-1 ${colorTS}`} onClick={handleShowTS}>
          Tài sản
        </button>
      </div>
    </div>
  );
};

export default HomeRight;
