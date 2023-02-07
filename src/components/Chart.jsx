import Chart1 from "./Chart1";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Chart() {
    const [active,setActive] =useState(false)
    const handleChart =()=>{
        setActive(!active)
    }
    const handlePie =()=>{
        setActive(!active)
    }
  return (
    <div className="flex flex-col justify-between">
      <div className="h-[316px]">
        <Chart1 />
      </div>
      <div className="iframe2">
        { !active ?  <Iframe
          url="https://mkw.vndirect.com.vn/leader_lagger?color=gray"
          width="100%"
          height="267px"
          id=""
          className="bg-slate-800"
          display="block"
          position="relative"
        /> :
           <Iframe url="https://mkw.vndirect.com.vn/market_cap?color=gray"
        width="100%"
        height="267px"
        id=""
        className=""
        display="block"
        position="relative"/>
        }
      </div>
      <div className="footer flex justify-between items-center text-sm bg-[#131722] fixed w-[620px] z-100 bottom-0 text-white  ">
        <p className="basis-[400px] pl-5">Bản quyền thuộc về VNDirect 2023</p>
        <button className={`text-center basis-1/3 py-1`}>VN30</button>
        <button className={`text-center basis-1/3 text-lg `} onClick={handlePie}>
          <FontAwesomeIcon icon={faChartPie} />
        </button>
        <button className={`text-center basis-1/3 text-lg  `} onClick={handleChart}>
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
      </div>
    </div>
  );
}
