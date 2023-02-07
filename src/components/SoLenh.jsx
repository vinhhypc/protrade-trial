import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
const SoLenh = ({handleCollapse}) => {
    const [soLenh,setSoLenh] =useState(false)
    const [colorDay,setColorDay] =useState("text-[orange]")
    const [colorCon,setColorCont] = useState("text-[white]")
    const handleDay =()=>{
      setSoLenh(false);
      setColorDay("text-[orange]")
      setColorCont("text-[white]")
    }
    const handleCon =()=>{
      setSoLenh(true);
      setColorDay("text-[white]")
      setColorCont("text-[orange]")
    }
  return (
    <div className={`w-[398px] h-screen bg-[#2f3240] text-white relative`}>
      <div className="title relative">
        <div className="flex justify-around text-sm py-3 mr-[60px] items-center">
          <button className={colorDay} onClick={handleDay}>Lệnh trong ngày</button>
          <button className={colorCon} onClick={handleCon}>Lệnh điều kiện</button>
        </div>
        <span className="flex gap-2 mt-[-8px] absolute right-3 top-5 text-[orange] ">
          <p className='cursor-pointer '><FontAwesomeIcon icon={faArrowsRotate} /></p>
          <p className='cursor-pointer' onClick={handleCollapse}><FontAwesomeIcon icon={faMinus} /></p>
        </span>
      </div>
      <div className="command text-sm flex justify-evenly items-center bg-[hsla(0,0%,47.1%,.15)] py-[5px]">
        <p>Lệnh</p>
        <p>Mã</p>
        {!soLenh === false ? <p>Giá KH</p> : soLenh && <p>Giá</p>}
        {!soLenh === true ? <p>KL khớp</p> : soLenh && <p>KL</p>}
        <p>Giá</p>
        {soLenh && <p>Ngày hết hạn</p>}
        <p>TT</p>
      </div>
      <div className='info text-center text-sm text-[#777] mt-5'>Chưa có lệnh nào trong sổ lệnh</div>
      
    </div>
  )
}

export default SoLenh