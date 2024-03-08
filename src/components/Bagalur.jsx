import React, { useEffect, useState } from "react";
import "./Bagalur.scss";
import SidebarSection from "./SidebarSection";
import {
  BagalurMain,
  Bagalur1,
  Bagalur2,
  Bagalur3,
  Bagalur4,
  Bagalur5,
  Building,
  Land1,
  Land2,
  Land3,
} from "../assets";
import MainMenu from "./MainMenu";
import Navbar2 from "./Navbar2";

function Bagalur() {
  const BagalurImg = [
    {
      img: Bagalur1,
      num: 113,
      text: "Land size (Acres)",
    },
    {
      img: Bagalur2,
      num: 2.53,
      text: "Gross Leasable Area (MM sq. ft.)",
    },
    {
      img: Bagalur3,
      num: 90,
      text: "Capital Committed (INR Cr.)",
    },
    {
      img: Bagalur4,
      num: 20,
      text: "Fund Stake (%)",
    },
    {
      img: Bagalur5,
      num: 79,
      text: "Capital Invested (INR Cr.)",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 834);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <>
      {isMobile && <Navbar2 />}
      <div className="investment-summery">
        {!isMobile && <MainMenu />}
        <div id="bagalur-main-container">
          <div className="folio-no">
            <button className="poppins-medium">Folio no - 123456</button>
          </div>
          <div>
            <div className="bagalur-container">
              <div className="bagalur">
                <h3 className="poppins-semibold">Bagalur</h3>
                <div id="bagalur-img-container">
                  {BagalurImg.map((img, index) => (
                    <div key={index} className="bagalur-img-container">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "flex-start",
                          gap: "1em",
                        }}
                      >
                        <img src={img.img} alt="bagalur" />
                        <div>
                          <p className="poppins-extrabold num">{img.num}</p>
                          <p className="poppins-medium  text">{img.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bagalur">
                <div>
                  <h3>Project Progress (%)</h3>
                  {/* Placeholder for project progress image */}
                </div>
                <img
                  style={{ width: "100%", display: "block", margin: "auto" }}
                  src={BagalurMain}
                  alt="bagalur"
                />
                <div className="city1">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div className="city1-box"></div>
                    <p style={{ margin: "0" }}>Actual</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#FF6969" }}
                    ></div>
                    <p style={{ margin: "0" }}>Target</p>
                  </div>
                </div>
                {/* Placeholder for additional content */}
                <div></div>
              </div>
            </div>
            <div id="three-section">
              <div className="land-details-container">
                <div className="land-details">
                  <img
                    style={{ width: "1.5em", paddingBottom: "1.5em" }}
                    src={Land1}
                    alt=" land"
                  />
                  <h3
                    className="poppins-semibold"
                    style={{ margin: "0", fontSize: "1.6em" }}
                  >
                    Land Details
                  </h3>
                </div>
                <div className="land-details-number">
                  <h3 className="poppins-semibold">100%</h3>
                </div>
              </div>
              <div className="land-details-container">
                <div className="land-details">
                  <img
                    style={{ width: "1.5em", paddingBottom: "1.5em" }}
                    src={Land2}
                    alt=" land"
                  />
                  <h3
                    className="poppins-semibold"
                    style={{ margin: "0", fontSize: "1.6em" }}
                  >
                    Approvals
                  </h3>
                </div>
                <div className="land-details-number">
                  <h3 className="poppins-semibold">100%</h3>
                </div>
              </div>
              <div className="land-details-container">
                <div className="land-details">
                  <img
                    style={{ width: "1.5em", paddingBottom: "1.5em" }}
                    src={Land3}
                    alt=" land"
                  />
                  <h3
                    className="poppins-semibold"
                    style={{ margin: "0", fontSize: "1.6em" }}
                  >
                    Development Status
                  </h3>
                </div>
                <div className="land-details-number">
                  <h3 className="poppins-semibold">75%</h3>
                </div>
              </div>
            </div>
            <div className="bagalur-container-2">
              <div className="bagalur">
                <div>
                  <h3>Building Status (Nos.)</h3>
                  {/* Placeholder for project progress image */}
                </div>
                <img
                  // style={{
                  //   width: "46%",
                  //   objectFit: "cover",
                  //   display: "block",
                  //   margin: "auto",
                  // }}
                  src={Building}
                  alt="bagalur"
                  className="building-img"
                />
                <div className="city1">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#B1FFD6" }}
                    ></div>
                    <p style={{ margin: "0" }}>Actual</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#FFADDB" }}
                    ></div>
                    <p style={{ margin: "0" }}>Target</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#95FDEB" }}
                    ></div>
                    <p style={{ margin: "0" }}>Target</p>
                  </div>
                </div>
                {/* Placeholder for additional content */}
              </div>
              <div className="bagalur">
                <div>
                  <h3>Leasing Status (MM sq.ft.)</h3>
                  {/* Placeholder for project progress image */}
                </div>
                <img
                  className="building-img"
                  // style={{
                  //   width: "46%",
                  //   objectFit: "cover",
                  //   display: "block",
                  //   margin: "auto",
                  // }}
                  src={Building}
                  alt="bagalur"
                />
                <div className="city1">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#B1FFD6" }}
                    ></div>
                    <p style={{ margin: "0" }}>Actual</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#FFADDB" }}
                    ></div>
                    <p style={{ margin: "0" }}>Target</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="city1-box"
                      style={{ backgroundColor: "#BECB8B" }}
                    ></div>
                    <p style={{ margin: "0" }}>Target</p>
                  </div>
                </div>
                {/* Placeholder for additional content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bagalur;
