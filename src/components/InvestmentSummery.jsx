import React, { useState, useEffect } from "react";
import "./InvestmentSummery.scss";
import { Dropdown, Space } from "antd";
import {
  MyInvestment,
  Drawdown,
  LastNAV,
  LastDrawdownFundReceiveDate,
  Next,
  INR,
  INR2,
} from "../assets";
import MainMenu from "./MainMenu";
import Navbar2 from "./Navbar2";
function InvestmentSummery() {
  const content = [
    { text: "My Investment", price: "1 Cr (INR)", img: MyInvestment },
    { text: "Drawdown till Date", price: "60 L (INR)", img: Drawdown },
    { text: "Last NAV", price: "30 L (INR)", img: LastNAV },
    {
      text: "Last Drawdown Fund Receive Date",
      price: "30-11-2022",
      img: LastDrawdownFundReceiveDate,
    },
    {
      text1: "Next",
      text2: "Drawdrawn",
      price: "20 L (INR)",
      img1: INR,
      img2: Next,
    },
    {
      text1: "Next",
      text2: "Drawdrawn",
      price: "31-12-2022",
      img1: INR2,
      img2: Next,
    },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 834);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile && <Navbar2 />}
      <div className="investment-summery">
        {!isMobile && <MainMenu />}
        <div id="investment-summery-main-container">
          <div className="folio-no">
            <button>Folio no - 123456</button>
          </div>
          <div id="text-Section">
            <h2>Hello, Venkatraman Subramanian Iyer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p>sed do eiusmod tempor incididunt eiusmod tempor</p>
          </div>
          <div id="box-main-container">
            <h2>Investment Summary</h2>
            <div id="box-container">
              {content.map((item, index) => (
                <div className="box">
                  <div className="text-for-investment-summery">
                    {index === 4 || index === 5 ? (
                      <>
                        <div id="next-box">
                          <img src={item?.img2} alt="next" className="next" />
                          <h3>{item?.text1}</h3>
                        </div>
                        <h3>{item?.text2}</h3>
                      </>
                    ) : (
                      <h3>{item?.text}</h3>
                    )}
                    <p style={{ color: "#00B5F0" }}>{item?.price}</p>
                  </div>
                  <div className="img-box">
                    {index === 4 || index === 5 ? (
                      <img src={item?.img1} alt="next" />
                    ) : (
                      <img src={item?.img} alt="next" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestmentSummery;
