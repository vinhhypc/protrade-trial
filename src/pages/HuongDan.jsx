import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";
const HuongDan = () => {
  useEffect(() => {
    document.title = 'Hướng dẫn';
  }, []);
  return (
    <div className="w-full text-sm  bg-[url(https://static-01.vndirect.com.vn/images/protrade/guide/background_guide.jpg)] bg-no-repeat bg-fixed bg-center">
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>
      <div className="main-content flex items-center justify-between flex-col">
        <div className="top text-center pb-5 mt-32">
          <h1 className="uppercase text-[#f7941d] font-semibold  pt-[50px] text-[28px]">
            Hướng dẫn sử dụng dtradepro
          </h1>
          <h3 className="my-4 text-white text-lg">
            Tốc độ vượt trội - Chớp ngay cơ hội
          </h3>
        </div>
        <div className="video flex items-center justify-center py-5">
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/-fqtjPYpXAs"
            title="PHIÊN CUỐI NĂM NHÂM DẦN | NHỊP ĐẬP THỊ TRƯỜNG 19/01/2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="guide-content flex flex-col w-10/12 bg-[rgba(20,20,20,.5)] p-5 text-white mb-24">
          <div className="content-first flex flex-col ">
            <div className="header text-[#f7941d] text-lg font-semibold my-[18px]">
              1-Đặt lệnh
            </div>
            <div className="py-[10px]">
              <p className="pb-[10px]">
                Để đặt lệnh trên Dtrade Pro, quý khách có thể thực hiện theo các
                cách sau:
              </p>
              <div className="guide-first">
                <p className="pb-[10px]">
                  <span className="font-semibold">Cách 1 :</span>
                  {` Nhập KL muốn mua/bán > click nút “Mua” hoặc “Bán” để đặt lệnh mua/bán với giá mua 1 hoặc giá bán 1`}
                </p>
                <img
                  className="w-4/5 mx-auto p-[10px]"
                  src="https://static-01.vndirect.com.vn/images/dpro/guide/dat_lenh_cach_1.jpg"
                  alt="cach1"
                />
              </div>
              <div className="guide-second">
                <p className="pb-[10px]">
                  <span className="font-semibold">Cách 2 :</span>Click đúp vào
                  giá của mục 10 bước giá, giá trên bảng giá phái sinh, giá
                  trần/sàn/tham chiếu
                </p>
                <img
                  className="p-[10px] w-4/5 mx-auto "
                  src="https://static-01.vndirect.com.vn/images/dpro/guide/dat_lenh_cach_2.1.jpg"
                  alt="cach2"
                />
                <img
                  className="p-[10px] w-4/5 mx-auto"
                  src="https://static-01.vndirect.com.vn/images/dpro/guide/dat_lenh_cach_2.2.png"
                  alt="cach2"
                />
                <img
                  className="p-[10px] w-4/5 mx-auto"
                  src="https://static-01.vndirect.com.vn/images/dpro/guide/dat_lenh_cach_2.3.png"
                  alt="cach2"
                />
              </div>
              <div className="guide-third">
                <p className="pb-[10px]">
                  <span className="font-semibold">Cách 3 :</span>Quý khách chủ
                  động đặt lệnh bằng cách nhập các thông tin mã hợp đồng, giá
                  muốn thực hiện giao dịch và khối lượng hợp đồng sau đó click
                  vào nút Mua/Bán
                </p>
                <img
                  className="p-[10px] w-4/5 mx-auto"
                  src="https://static-01.vndirect.com.vn/images/dpro/guide/dat_lenh_cach_3.jpg"
                  alt="cach1"
                />
              </div>
            </div>
          </div>
          <div className="content-second py-[10px]">
            <div className="header text-[#f7941d] text-lg font-semibold my-[18px]">
              2-Đóng, đảo nhanh vị thế
            </div>
            <div>
              <p>{`- Quý khách vào phần Danh mục > Bấm vào nút “Đảo” để được điền sẵn thông tin đặt 
              lệnh ngược chiều với giá MTL và KL bằng 2 lần KL vị thế đang nắm giữ`}</p>
              <p className="pb-[10px]">{`- Quý khách vào phần Danh mục > Bấm vào nút “Đóng” để được điền sẵn thông tin đặt
               lệnh ngược chiều với giá MTL và KL bằng KL vị thế đang nắm giữ`}</p>
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/dao_vi_the.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="content-third">
            <div className="header text-[#f7941d] text-lg font-semibold my-[18px]">
              3- Theo dõi sổ lệnh và lãi/lỗ danh mục
            </div>
            <div>
              <p className="pb-[10px]">
                Quý khách bấm vào nút “Sổ lệnh” hoặc “Danh mục” để xem chi tiết
                sổ lệnh/danh mục
              </p>
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/so_lenh_danh_muc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="content-four">
            <div className="header text-[#f7941d] text-lg font-semibold my-[18px]">
              4- Theo dõi tài sản
            </div>
            <div>
              <p className="p-[10px]">
                Quý khách bấm vào nút “Tài sản” trên Menu để xem chi tiết báo
                cáo tài sản.
              </p>
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/tai_san_1.png"
                alt=""
              />
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/tai_san_2.png"
                alt=""
              />
            </div>
          </div>
          <div className="content-five pb-[10px]">
            <div className="header text-[#f7941d] text-lg font-semibold my-[18px]">
              5- Chuyển tiền
            </div>
            <div>
              <p className="pb-[10px]">{`Quý khách bấm vào nút “Chuyển tiền” trên Menu > Lựa chọn loại giao dịch > Nhập số tiền > Bấm vào nút “Xác nhận” để chuyển tiền`}</p>
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/chuyen_tien_1.png"
                alt=""
              />
              <img
                className="p-[10px] w-4/5 mx-auto"
                src="https://static-01.vndirect.com.vn/images/dpro/guide/chuyen_tien_2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuongDan;
