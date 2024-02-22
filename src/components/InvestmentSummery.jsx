import React from "react";
import SidebarSection from "./SidebarSection";
import "./InvestmentSummery.scss";
import {
  MyInvestment,
  Drawdown,
  LastNAV,
  LastDrawdownFundReceiveDate,
  Next,
  INR,
  INR2,
} from "../assets";
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
  return (
    <div className="investment-summery">
      <SidebarSection />
      <div id="investment-summery-main-container">
        <div className="folio-no">
          <button className="poppins-medium">Folio no - 123456</button>
        </div>
        <div id="text-Section">
          <h2 className="poppins-medium">
            Hello, Venkatraman Subramanian Iyer
          </h2>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <p className="poppins-regular">
            sed do eiusmod tempor incididunt eiusmod tempor
          </p>
        </div>
        <div id="box-main-container">
          <h2 className="poppins-medium">Investment Summary</h2>
          <div id="box-container">
            {content.map((item, index) => (
              <div className="box">
                <div className="text-for-investment-summery">
                  {index === 4 || index === 5 ? (
                    <>
                      <div id="next-box">
                        <img src={item?.img2} alt="next" className="next" />
                        <h3 className="poppins-medium ">{item?.text1}</h3>
                      </div>
                      <h3 className="poppins-medium">{item?.text2}</h3>
                    </>
                  ) : (
                    <h3>{item?.text}</h3>
                  )}
                  <p className="poppins-extrabold">{item?.price}</p>
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
  );
}

export default InvestmentSummery;
