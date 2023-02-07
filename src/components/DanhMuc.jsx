import React from "react";
// import PlaceOrder from './PlaceOrder'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
const DanhMuc = ({handleCollapse}) => {
  const [danhMuc, setDanhMuc] = useState(false);
  const [colorOpen, setColorOpen] = useState("text-[orange]");
  const [colorClose, setColorClose] = useState("text-[white]");
  const handleOpen = () => {
    setDanhMuc(false);
    setColorOpen("text-[orange]");
    setColorClose("text-[white]");
  };
  const handleClose = () => {
    setDanhMuc(true);
    setColorOpen("text-[white]");
    setColorClose("text-[orange]");
  };
  return (
    <div className="w-[398px] h-screen bg-[#2f3240] text-white relative ">
      <div className="title relative">
        <div className="flex justify-around text-sm py-3 mr-[60px] items-center">
          <button className={colorOpen} onClick={handleOpen}>
            Vị thế mở
          </button>
          <button className={colorClose} onClick={handleClose}>
            Vị thế đóng
          </button>
        </div>
        <span className="flex gap-2 absolute right-3 top-3 text-[orange] ">
          <p className="cursor-pointer ">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </p>
          <p className="cursor-pointer " onClick={handleCollapse}>
            <FontAwesomeIcon icon={faMinus} />
          </p>
        </span>
      </div>
      <div className="command text-sm flex justify-evenly items-center bg-[hsla(0,0%,47.1%,.15)] py-[5px]">
        <p>Mã</p>
        <p>KL</p>
        {!danhMuc === true ? <p>Giá vốn</p> : <p>Giá mua</p>}
        {!danhMuc === true ? <p>Giá hiện tại</p> : <p>Giá bán</p>}
        {!danhMuc === true ? <p>+/-</p> : <p>Lãi/lỗ đã TH</p>}
      </div>
      {!danhMuc === true ? (
        <div className="info text-center text-sm text-[#777] mt-5">
          Chưa có mã nào trong danh mục của Quý khách
        </div>
      ) : (
        <div className="info text-center text-sm text-[#777] mt-5">
          Chưa có dữ liệu
        </div>
      )}
    </div>
  );
};

export default DanhMuc;
