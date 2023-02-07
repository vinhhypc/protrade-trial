import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import TooltipsReactjs from "tooltips-reactjs";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className=" flex flex-col bg-[url(https://static-01.vndirect.com.vn/images/dpro/dpro_login_bg.jpg)] h-screen bg-cover bg-center">
      <div className="flex flex-col items-center mt-36 relative ">
        <div className="logo w-[350px] absolute top-[-77px] ">
          <img
            src="https://protrade-trial.vndirect.com.vn/static/media/pt_trial.a0934fd1.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-white opacity-90 w-[350px] z-10 rounded-lg ">
          <form name="login" className="p-1 flex items-center flex-col">
            <p className="text-center my-4 font-semibold text-[#444] text-sm">
              Đăng nhập với tài khoản VNDIRECT
            </p>
            <div className="form-row flex justify-center">
              <div className="form-field">
                <label className="text-sm text-[#444]">Tên đăng nhập:</label>
                <input
                  type="text"
                  required
                  className="border text-md py-[2px] my-1 rounded-md block w-52 "
                  name="username"
                  autoCorrect="off"
                  autoCapitalize="none"
                ></input>
              </div>
            </div>
            <div className="form-row flex justify-center">
              <div className="form-field flex flex-col">
                <label className="my-1 text-sm text-[#444]">Mật khẩu:</label>
                <input
                  type="password"
                  required
                  name="password"
                  className="border text-md mb-[10px] rounded-md block py-[2px] w-52"
                ></input>
              </div>
            </div>
            <div className="form-row flex items-center justify-center w-52">
              <div className="form-field ">
                <label htmlFor="remember-me">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    value="on"
                    className="mx-1"
                  ></input>
                  <span className="text-sm text-[#444]">
                    Ghi nhớ trạng thái đăng nhập trên trình duyệt này
                  </span>
                  <span className="text-xs ml-2 opacity-80">
                    <TooltipsReactjs
                      text={<div className="text-sm">Ghi nhớ trạng thái đăng nhập giúp Quý khách không cần phải login lại mỗi lần vào VNDIRECT trên trình duyệt này. Để hủy trạng thái, Quý khách vui lòng Đăng xuất.</div>}
                      type={"top"}
                      background={"#222"}
                      borderRadius={"0%"}
                      color={"white"}
                      width={"1050px"}
                      offsetX={"-4320"}
                      offsetY={"150"}
                      height={"32px"}
                    >
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </TooltipsReactjs>
                  </span>
                </label>
              </div>
            </div>
            <Link to="/trang-chu" ><button
              type="submit"
              className="focus:outline-none w-52 text-white bg-[#f7941d] font-semibold rounded-md text-sm px-5 py-1.5 mx-2 my-5"
            >
              <span className="text-xs">
                <FontAwesomeIcon icon={faRightToBracket} />
              </span>
              &nbsp;&nbsp;
              <span className="text-xs">Đăng nhập</span>
            </button></Link>
            
          </form>
          <div className="border border-dotted w-[96%]"></div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="focus:outline-none text-white bg-[#18c451] font-semibold rounded-md text-sm px-5 py-1.5 w-52 mt-4 mb-2"
            >
              <a href="https://account-v2.vndirect.com.vn/">
                <span className="text-xs">
                  <FontAwesomeIcon icon={faLock} />
                  &nbsp;&nbsp;
                  <span>Mở tài khoản</span>
                </span>
              </a>
            </button>
            <p className="text-center text-sm mb-16">
              <a
                href="https://www.vndirect.com.vn/portal/tro-giup/hoi-dap-huong-dan.shtml"
                target="_blank"
                rel="noopener noreferrer"
                class="support"
              >
                Trợ giúp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
