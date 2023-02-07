import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const TaiSan = ({handleCollapse}) => {
  return (
    <div className="w-[398px] h-screen bg-[#2f3240] text-white ">
      <div className="title flex justify-between items-center px-2 py-2 bg-[hsla(0,0%,47.1%,.15)] border-b border-gray-500">
        <div className="text-[orange] text-sm ">Thông tin tài sản</div>
        <span className="flex gap-3 right-3 top-5 text-[orange] ">
          <p className="cursor-pointer ">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </p>
          <p>
            <Link to="/tai-san">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </p>
          <p className="cursor-pointer" onClick={handleCollapse}>
            <FontAwesomeIcon icon={faMinus} />
          </p>
        </span>
      </div>
      <div className="info  text-sm">
        <div className="title px-2 py-2 flex justify-between border-b border-gray-500">
            <p>Tài sản ròng</p>
            <p>40,000,000</p>
        </div>
        <div className="title px-2 py-2 flex justify-between border-b border-gray-500">
            <p>Số dư kí quỹ</p>
            <p>24,000,000</p>
        </div>
        <div className="title px-2 py-2 flex justify-between border-b border-gray-500">
            <p>Thuế và phí</p>
            <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default TaiSan;
