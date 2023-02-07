import React, { useState } from "react";
import Clock from "./Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../imgs/protrade.svg";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Board from "./Board";
const Header = () => {
  const [active,setActive] = useState(0)
  return (
    <div className="modal top-bar flex flex-row gap-x-3 bg-[#131722] py-1 z-100">
      <img src={Logo} alt="logo" className="w-[140px] pl-2 pr-1" />
      <div
        id="vnds-clock"
        className="flex items-center justify-between text-sm font-medium"
      >
        <Clock />
      </div>
      <div className="menu flex flex-row items-center text-white text-sm ">
        <div className="flex ">
          <div className={`border-l border-[#333] px-2 ${active === 0 ? "text-[orange]" : "text-[white]"} hover:text-[orange]`} onClick={()=>setActive(0)}>
            <Link to="/trang-chu">Trang chủ</Link>
          </div>
          <div className={`border-l border-[#333] px-2 ${active === 1 ? "text-[orange]" : "text-[white]"} hover:text-[orange] `} onClick={()=>setActive(1)}  >
            <Link to="/tai-san">Tài sản</Link> 
          </div>
          <div className={`border-l border-[#333] px-2 ${active === 2 ? "text-[orange]" : "text-[white]"} hover:text-[orange]`} onClick={()=>setActive(2)}>
            <Link to="/huong-dan">Hướng dẫn</Link>
          </div>
        </div>
      </div>
      <span
        id="profitloss"
        className="text-[#f7941d] text-sm flex items-center"
      >
        Lãi/Lỗ :<span className="number text-[#ffd900]">&nbsp;0</span>
      </span>
      <div className="board text-white text-sm  flex items-center ml-16 mr-20 cursor-pointer">
        <div className="bg-[#97037f] pl-3 px-2 rounded">
          <FontAwesomeIcon icon={faTrophy} />
          &nbsp;
          <span>
            <Popup modal trigger={<button>Top cao thủ phái sinh</button>}>
              {(close) => <Board close={close} />}
            </Popup>
          </span>
        </div>
      </div>
      <div className="menu flex flex-row gap-x-3 text-white items-center text-sm ">
        <div
          id="demo"
          className="border py-[3px] px-2 border-[#f7941d] rounded-lg font-semibold "
        >
          BẢN TRIAL
        </div>
        <a
            href="https://myaccount.vndirect.com.vn/account-info?tab=account-register"
            className="bg-[#f7941d] px-[6px] py-[3px] rounded"
            target="_blank" 
            rel="noreferrer"
          >
            Nâng cấp tài khoản
        </a>
        <div className="menu-dropdown flex gap-2">
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="user-name cursor-pointer">Nghiêm Quang Vinh</span>
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
