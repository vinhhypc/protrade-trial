import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Middle = () => {
  return (
    <div className="middle">
      <div className="top text-white bg-[#2f3240] overflow-y-auto overflow-x-hidden h-[310px] border-r-[3px] border-l-[3px] border-slate-900">
        <div className="header flex justify-between items-center text-sm pl-1 pr-5 pt-1 border-b border-gray-800">
          <p className="text-lg font-semibold">VN30F2302</p>
          <div>
            <p>Sàn:</p>
            <p className="text-[#00c5c5]">1006.2</p>
          </div>
          <div>
            <p>TC:</p>
            <p className="text-[#ffd900]">1081.9</p>
          </div>
          <div>
            <p>Trần:</p>
            <p className="text-[#ff25ff]">1157.6</p>
          </div>
        </div>
        <div className="title flex items-center justify-around text-sm py-2 ">
          <p className="text-[orange]">Bước giá</p>
          <p>Lịch sử khớp lệnh</p>
        </div>
        <div className="table-head flex text-sm items-center text-gray-300 bg-gray-500 py-1 px-2 justify-between">
          <p>KL Mua</p>
          <p>Giá Mua</p>
          <p>Giá Bán</p>
          <p>KL Bán</p>
        </div>
        <ul className="flex flex-col text-sm ">
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center justify-between text-sm py-1 px-5">
            <p>29</p>
            <p>1079.1</p>
            <p>1080.2</p>
            <p>30</p>
          </li>
          <hr className="border-gray-800" />
        </ul>
      </div>
      <div className="bottom text-white w-[350px] h-[270px] bg-[#2f3240] border-[3px] border-slate-900">
        <div className="table-head flex text-sm items-center text-gray-300 bg-gray-700 py-2  px-2">
          <p className="pl-6 pr-12 ">Mã</p>
          <p className="pr-6">Giá</p>
          <div className="pl-4 pr-6 "> 
            <span className="cursor-pointer"><FontAwesomeIcon icon={faCaretLeft} /></span>
            +/-
            <span className="cursor-pointer"><FontAwesomeIcon icon={faCaretRight} /></span>
          </div>
          <p>Lệch</p>
          <p className="pl-[36px]">Tổng KL</p>
        </div>
        <ul className="flex flex-col text-sm ">
          <li className="flex items-center text-sm py-1 pl-1 bg-gray-800">
            <p className="text-[#0f0]">VN30F2302</p>
            <p className="pl-4 text-[#0f0]">1079.1</p>
            <p className="pl-8 text-[#0f0]">9.7</p>
            <p className="pr-4 pl-8 text-[red]">1.45</p>
            <p className="pl-14">330</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center text-sm py-1 pl-1 bg-gray-700">
            <p className="text-[#0f0]">VN30F2302</p>
            <p className="pl-4 text-[#0f0]">1079.1</p>
            <p className="pl-8 text-[#0f0]">9.7</p>
            <p className="pr-4 pl-8 text-[red]">1.45</p>
            <p className="pl-14">330</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center text-sm py-1 pl-1 bg-gray-800">
            <p className="text-[#0f0]">VN30F2302</p>
            <p className="pl-4 text-[#0f0]">1079.1</p>
            <p className="pl-8 text-[#0f0]">9.7</p>
            <p className="pr-4 pl-8 text-[red]">1.45</p>
            <p className="pl-14">330</p>
          </li>
          <hr className="border-gray-800" />
          <li className="flex items-center text-sm py-1 pl-1 bg-gray-700">
            <p className="text-[#0f0]">VN30F2302</p>
            <p className="pl-4 text-[#0f0]">1079.1</p>
            <p className="pl-8 text-[#0f0]">9.7</p>
            <p className="pr-4 pl-8 text-[red]">1.45</p>
            <p className="pl-14">330</p>
          </li>
          <hr className="border-gray-800" />
        </ul>
      </div>
    </div>
  );
};

export default Middle;
