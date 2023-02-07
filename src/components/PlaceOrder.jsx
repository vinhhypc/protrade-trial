import React from "react";
import { useState } from "react";
const PlaceOrder = () => {
  let day = `0${new Date().getDate()}/0${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()} `;
  const [show, setShow] = useState(false);
  return (
    <div className="pt-4 pb-9 w-[398px] text-white bg-[#2f3240] border-t-2 border-gray-900 ">
      <div className="form py-1">
        <div className="list flex text-sm justify-around ">
          <div>
            <input
              type="radio"
              name="list"
              value="normal"
              id="normal"
              onClick={() => setShow(false)}
              defaultChecked
            />
            <label htmlFor="normal" className="ml-1 cursor-pointer">
              Lệnh thường
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="list"
              value="stop"
              id="stop"
              onChange={() => setShow(!show)}
            />
            <label htmlFor="stop" className="ml-1 cursor-pointer">
              Lệnh Stop
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="list"
              value="trailing"
              id="trailing"
              readOnly
            />
            <label htmlFor="trailing" className="ml-1 cursor-pointer">
              Lệnh trailing
            </label>
          </div>
          <div>
            <input type="radio" name="list" value="oso" id="oso" readOnly />
            <label htmlFor="oso" className="ml-1 cursor-pointer">
              Lệnh OSO
            </label>
          </div>
        </div>
        <br />
        <div className="selection text-sm">
          <div className="flex justify-between ml-3 mr-4 items-center pb-[6px]">
            <label htmlFor="hdtl">Mã HDTL:</label>
            <input
              type="text"
              id="hdtl"
              className="rounded w-[240px] h-8 outline-none text-gray-600 px-1"
              placeholder="Mã"
            />
          </div>
          <div className="flex justify-between ml-3 mr-4 items-center pb-[6px]">
            <label htmlFor="price">Giá đặt:</label>
            <input
              type="text"
              id="price"
              className="rounded w-[240px] h-8 px-1 outline-none text-gray-600"
              placeholder="Giá"
            />
          </div>
          <div className="flex justify-between ml-3 mr-4 items-center pb-[6px]">
            <label htmlFor="weight">Khối lượng:</label>
            <input
              type="text"
              id="weight"
              className="rounded w-[240px] h-8 px-1 outline-none text-gray-600"
              placeholder="KL"
            />
          </div>
          {show && (
            <>
              <div className="flex justify-between ml-3 mr-4 items-center pb-[6px]">
                <label htmlFor="weight">Khi giá khớp:</label>
                <input
                  type="text"
                  id="weight"
                  className="rounded w-[240px] h-8 px-1 outline-none text-gray-600"
                  placeholder="Giá kích hoạt"
                />
              </div>
              <div className="flex justify-between ml-3 mr-4 items-center pb-[6px]">
                <label htmlFor="weight">Ngày hết hạn:</label>
                <input
                  type="text"
                  id="weight"
                  className="rounded w-[240px] h-8 px-1 outline-none text-gray-600"
                  value={day}
                />
              </div>
            </>
          )}
        </div>
        <div className="row-button text-sm pl-[70px] py-[5px] flex gap-x-[10px] items-center">
          <button className="buy bg-[green] w-[110px] h-[30px] rounded font-bold">
            Mua
          </button>
          <button className="sell bg-[red] w-[110px] h-[30px] rounded font-bold">
            Bán
          </button>
          <div>
            <input type="checkbox" name="save" id="save" className="mr-1" />
            <label htmlFor="save" className="">
              Lưu lệnh
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
