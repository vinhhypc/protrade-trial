// import React, { useState } from "react";
import Header from "../components/Header";
import { useEffect} from "react";
import HomeRight from "../components/HomeRight";
import Chart from "../components/Chart";
import Middle from "../components/Middle";
const Home = () => {
  useEffect(() => {
    document.title = "Protrade trial";
  }, []);
  return (
    <div className="home h-screen overflow-hidden w-full flex-wrap">
      {/* <div className="fixed top-0 left-0 right-0 z-100">
        <Header />
      </div>
      <div className="main ">
        <div className={` fixed left-0 top-[46px] "w-[620px]"`}>
          <Chart />
        </div>
        <div className="fixed top-[46px] w-[350px] right-[397px]">
          <Middle />
        </div>
        <div className=" fixed top-[46px] right-[-203px] w-[600px]  ">
          <HomeRight  />
        </div>
      </div> */}
      <div className="">
        <Header />
      </div>
      <div className="main flex ">
        <div className={`grow`}>
          <Chart />
        </div>
        <div className="">
          <Middle />
        </div>
        <div className=" ">
          <HomeRight  />
        </div>
      </div> 



    </div>
  );
};

export default Home;
