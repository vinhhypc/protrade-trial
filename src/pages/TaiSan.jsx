import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TooltipsReactjs from "tooltips-reactjs";
import { useEffect } from "react";
import chartPhoto from "../imgs/chart.png"
const TaiSan = () => {
  useEffect(() => {
    document.title = 'Tài sản';
  }, []);
  return (
    <div className="main bg-[#2f3240] text-sm">
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>
      <div className="main-content">
        <div className="main-first ">
          <div className="main-notice pt-24 text-[#ed1c24] text-center mb-20">
            <span>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </span>
            &nbsp;
            <span className="italic font-medium text-sm">
              Danh mục và Tài sản của Quý khách sẽ trở về mặc định sau ngày đáo
              hạn hợp đồng tương lai của tháng
            </span>
          </div>
          <div className="asset-overview flex gap-12 px-8 pb-8 text-[#a1a1a1]">
            <div className="over-view-first pt-[100px] flex flex-col basis-[340px]">
              <div className="title-first flex text-[#f39200] border-b border-dotted py-2 justify-between ">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2 mr-1 py-2 ">Tài sản ròng</span>
                  <span className="text-xs">
                    <TooltipsReactjs
                        text={<div className="text-sm">(1) + (2) + (3) - (4)</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                        height={"30px"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                  </span>
                </span>
                <div className="money text-[#f39200]">40,000,000</div>
              </div>
              <div className="title-second flex border-b border-dotted py-2 justify-between">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2">Số dư kí quỹ có thể sử dụng</span>
                </span>
                <div className="money text-[#f39200]">24,000,000</div>
              </div>
              <div className="title-third flex border-b border-dotted py-2 justify-between">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2 mr-1">Số tiền kí quỹ cần bổ sung</span>
                  <span className="text-xs">
                  <TooltipsReactjs
                        text={<div className="text-sm">Số tiền ký quỹ bổ sung để đưa Tỷ lệ sử dụng tài khoản PS<br /> và Tỷ lệ sử dụng tài khoản ký quỹ về mức an toàn 80%</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        width={"400px"}
                        height={"60px"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                  </span>
                </span>
                <div className="money text-[#f39200]">0</div>
              </div>
            </div>
            <div className="over-view-second pt-[100px] flex  flex-col basis-[340px] ">
              <div className="title-first flex text-[#f39200] border-b border-dotted py-2 justify-between">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2 py-2">Nghĩa vụ kí quỹ</span>
                </span>
                <div className="money text-[#f39200]">0</div>
              </div>
              <div className="title-second flex border-b border-dotted py-2 justify-between">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2 mr-1 py-2">Kí quỹ ban đầu</span>
                  <span className="text-xs">
                  <TooltipsReactjs
                        text={<div className="text-sm">Nghĩa vụ ký quỹ phát sinh từ các vị thế đang nắm giữ</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                        height={"30px"}
                        width={"380px"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                  </span>
                </span>
                <div className="money text-[#f39200]">0</div>
              </div>
              <div className="title-first flex border-b border-dotted py-2 justify-between">
                <span>
                  <span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  <span className="ml-2 mr-1 py-2">Kí quỹ biến đổi</span>
                  <span className="text-xs">
                  <TooltipsReactjs
                        text={<div className="text-sm">Nghĩa vụ ký quỹ phát sinh từ lỗ ròng trong ngày</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                        height={"30px"}
                        width={"380px"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                  </span>
                </span>
                <div className="money text-[#f39200]">0</div>
              </div>
            </div>
            <div className="chart cursor-pointer">
              <img src={chartPhoto} alt="" />
            </div>
          </div>
        </div>
        <div className="main-info bg-[#131722] text-[#f39200] uppercase px-16 py-8">
          <div className="asset-detail flex justify-between">
            <div className="left my-2 flex basis-1/2 flex-col pr-12">
              <div className="detail-first flex mb-4 py-3 border-b border-[#7f7f7f] justify-between items-center">
                <span>
                  <span className="text-xs">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="mr-1 ml-2 ">1. Nghĩa vụ kí quỹ</span>
                  <span className="text-xs normal-case">
                  <TooltipsReactjs
                        text={<div className="text-sm">Tổng giá trị tài sản đã ký quỹ lên VSD</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                        height={"40px"}
                        width={"300px"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                  </span>
                </span>
                <div className="money">30,000,000</div>
              </div>
              <div className="detail-second flex mb-4 py-3 border-b border-[#7f7f7f] justify-between items-center">
                <span>
                  <span className="text-xs">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="ml-2">2. Lãi lỗ trong ngày</span>
                </span>
                <div className="money">0</div>
              </div>
              <div className="detail-third flex mb-4 py-3 border-b border-[#7f7f7f] justify-between items-center">
                <span>
                  <span className="text-xs">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="ml-2 mb-4">3. Tiền tại VNDIRECT</span>
                </span>
                <div className="money">10,000,000</div>
              </div>
            </div>
            <div className="right pl-12 flex flex-col basis-1/2 pr-4 mt-2">
              <div className="flex py-3 justify-between border-b border-[#7f7f7f] ">
                <span className="">
                  <span className="text-xs"><FontAwesomeIcon icon={faStar} /></span>
                  <span className="ml-2 ">4. Phí & Thuế</span>
                </span>
                <div>0</div>
              </div>
              <ul className="pl-6 text-white">
                <li className="flex py-2 justify-between border-b border-dotted">
                  <span className="normal-case">
                    <span className="mr-1">Phí vị thế cộng dồn</span>
                    <span className="text-xs">
                    <TooltipsReactjs
                        text={<div className="text-sm">Phí phát sinh từ việc nắm giữ vị thế</div>}
                        type={"right"}
                        background={"#5F6B6B"}
                        borderRadius={"0%"}
                        color={"white"}
                        offsetX={"150"}
                        offsetY={"-100"}
                        height={"40px"}
                        width={"280px"}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </TooltipsReactjs>
                    </span>
                  </span>
                  <div>0</div>
                </li>
                <li className="flex py-2 justify-between border-b border-dotted">
                  <span className="normal-case">Thuế thu nhập</span>
                  <div>0</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaiSan;
