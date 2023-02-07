import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faX } from "@fortawesome/free-solid-svg-icons";
import myCup from "../imgs/cup.png";
import Second from "../imgs/second.png";
import Third from "../imgs/third.png";
import { useState, useEffect } from "react";
import axios from "axios";
const Board = ({close}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://dertrial-api.vndirect.com.vn/demotrade/assets"
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  let arrs = data.sort((a, b) => b.netAssetValue - a.netAssetValue);
  let top1s = arrs.slice(0, 1);
  let top2s = arrs.slice(1, 2);
  let top3s = arrs.slice(2, 3);
  let others = arrs.slice(3, 10);
  let topweeks = arrs.slice(0, 3);
  let topweekothers = arrs.slice(3, 14);
  return (
    <div className="board flex items-start justify-between gap-5 p-5 h-screen  bg-white relative rounded-md z-100">
      <button className=" close absolute right-2 top-1 text-gray-600 text-sm" onClick={close}><FontAwesomeIcon icon={faX}/></button>
      <div className="top-month px-2 w-[450px] mt-3 ">
        <img
          src="https://protrade-trial.vndirect.com.vn/static/media/top-derivative.bb0daf79.png"
          alt=""
          className="h-[130px] mx-auto"
        />
        <div className="text-[#6c1b72] font-bold text-[22px] text-center mt-3">
          BẢNG XẾP HẠNG THÁNG
        </div>
        <div className="top-box px-3 pb-5">
          <div className="top-box-header flex justify-between items-end mb-2">
            <span className="text-[#f7941d] uppercase text-sm font-medium pl-[30px]">
              Cao thủ phái sinh
            </span>
            <div className="flex flex-col-reverse self-start items-end ">
              <span className="unit text-[10px] ">Đơn vị: VND</span>
              <span className="nav text-[#00de1e] text-[12px] font-semibold ">
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                &nbsp; NAV
              </span>
            </div>
          </div>
          <div className="top item relative mb-3 shadow-top-other">
            <img
              src={myCup}
              alt="cup"
              className="h-[50px] absolute top-[-18px] left-[-26px]"
            />
            <div className="flex justify-between items-center h-[30px] text-[#f7941d] rounded bg-gradient-to-r from-[#252061] to-[#751b7a] ">
              {top1s.map((top1) => (
                <>
                  <div className="username pl-[30px] font-semibold text-sm">
                    {top1.username}
                  </div>
                  <div className="money pr-2 text-sm">
                    {Math.round(top1.netAssetValue)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="top item relative mb-3 shadow-top-other">
            <img
              src={Second}
              alt="second"
              className="h-[40px] absolute top-[-5px] left-[-20px]"
            />
            <div className="flex justify-between items-center h-[30px] text-[white]  rounded bg-gradient-to-r from-[#252061] to-[#751b7a]">
              {top2s.map((top2) => (
                <>
                  <div className="username pl-[30px] font-semibold text-sm">
                    {top2.username}
                  </div>
                  <div className="money pr-2 text-sm">
                    {Math.round(top2.netAssetValue)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="top item relative mb-3 shadow-top-other">
            <img
              src={Third}
              alt="third"
              className="h-[40px] absolute top-[-5px] left-[-20px]"
            />
            <div className="flex justify-between items-center h-[30px] text-[white] rounded bg-gradient-to-r from-[#252061] to-[#751b7a]">
              {top3s.map((top3) => (
                <>
                  <div className="username pl-[30px] font-semibold text-sm">
                    {top3.username}
                  </div>
                  <div className="money pr-2 text-sm">
                    {Math.round(top3.netAssetValue)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="other p-[5px] pl-[10px] bg-gradient-to-r from-[#f7c41d] to-[#ff8a00] text-white rounded-md shadow-top-other h-[192px] overflow-y-scroll">
            {others.map((other) => (
              <ul className="item flex justify-between border-b border-solid border-[#eee] py-[6px]">
                <li className="username font-semibold text-sm">
                  {other.username}
                </li>
                <li className="money pr-2 text-sm">
                  {Math.round(other.netAssetValue)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#252061] to-[#751b7a] text-center mx-auto w-[70%] rounded-2xl font-medium text-sm h-[30px]">
          <div className="pt-[6px]">
            <a href="taisan" className="uppercase text-white">
              Tham gia ngay tại đây
            </a>
          </div>
        </div>
      </div>
      <div className="top-week px-2 w-[450px] text-center">
        <div className="title text-[#ff8000] font-bold text-[22px] ">
          BẢNG XẾP HẠNG TUẦN
        </div>
        <div className="notice text-xs italic font-light mb-5 text-gray-600">
          (Từ 8h00 thứ 2 đến 15h00 thứ 6 hàng tuần)
        </div>
        <div className="top-box py-5 shadow-top-week rounded">
          <div className="top-box-header flex justify-between items-end mb-2 mr-2">
            <span className="text-[#f7941d] uppercase text-sm font-medium ml-2">
              Cao thủ phái sinh
            </span>
            <div className="flex flex-col-reverse self-start items-end ">
              <span className="unit text-[10px] ">Đơn vị: VND</span>
              <span className="nav text-[#00de1e] text-[12px] font-semibold ">
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                &nbsp; NAV
              </span>
            </div>
          </div>
          <div className="top-item ">
            <div className="first-top sticky">
              {topweeks.map((topweek) => (
                <ul className="flex justify-between ml-[-6px] mr-[-6px] mb-[10px] py-[6px] bg-gradient-to-r from-[#f7c41d] to-[#ff8a00] text-white rounded shadow-top-user-week ">
                  <span className="username font-semibold text-sm ml-[20px]">
                    {topweek.username}
                  </span>
                  <span className="money text-sm mr-[20px]">
                    {Math.round(topweek.netAssetValue)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </ul>
              ))}
            </div>
            <div className="other overflow-y-scroll h-[325px] text-gray-700">
              {topweekothers.map((topweekother) => (
                <ul className="item flex justify-between text-sm ml-4 mr-3 mb-[10px] py-[6px] shadow-top-user-week border-b">
                  <li className="font-bold"> {topweekother.username}</li>
                  <li>
                    {Math.round(topweekother.netAssetValue)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
