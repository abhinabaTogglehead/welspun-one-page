import React, { useEffect, useState } from "react";
import "./PortfolioSummary.scss";
import SidebarSection from "./SidebarSection";
import {
  PSummary1,
  PSummary2,
  PSummaryGIcon,
  PSummaryMainImage,
} from "../assets";
import MainMenu from "./MainMenu";
import Navbar2 from "./Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";

function PortfolioSummary() {
  const content = [
    {
      heading: "Capital Deployed (INR Cr.)",
      icon: PSummaryGIcon,
      mainImage: PSummaryMainImage,
      city1: [
        {
          title: "Bagalur",
          color: "#FF9281",
        },
        {
          title: "Bhivandi",
          color: "#89D1E9",
        },
        {
          title: "Farukhnagar",
          color: "#BCACEA",
        },
      ],
      city2: [
        {
          title: "GRT JV",
          color: "#B2EAAC",
        },
        {
          title: "Hailey Mandi",
          color: "#EAE29C",
        },
      ],
    },
    {
      heading: "Gross Leasable Area (MM sq.ft.)",
      icon: PSummaryGIcon,
      mainImage: PSummaryMainImage,
      city1: [
        {
          title: "Bagalur",
          color: "#FF9281",
        },
        {
          title: "Bhivandi",
          color: "#89D1E9",
        },
        {
          title: "Farukhnagar",
          color: "#BCACEA",
        },
      ],
      city2: [
        {
          title: "GRT JV",
          color: "#B2EAAC",
        },
        {
          title: "Hailey Mandi",
          color: "#EAE29C",
        },
      ],
    },
    {
      heading: "Leasing Status (MM sq.ft.)",
      icon: PSummaryGIcon,
      mainImage: PSummaryMainImage,
      city1: [
        {
          title: "Bagalur",
          color: "#FF9281",
        },
        {
          title: "Bhivandi",
          color: "#89D1E9",
        },
        {
          title: "Farukhnagar",
          color: "#BCACEA",
        },
      ],
      city2: [
        {
          title: "GRT JV",
          color: "#B2EAAC",
        },
        {
          title: "Hailey Mandi",
          color: "#EAE29C",
        },
      ],
    },
    {
      heading: "Development Status",
      icon: PSummaryGIcon,
      mainImage: PSummaryMainImage,
      city1: [
        {
          title: "Bagalur",
          color: "#FF9281",
        },
        {
          title: "Bhivandi",
          color: "#89D1E9",
        },
        {
          title: "Farukhnagar",
          color: "#BCACEA",
        },
      ],
      city2: [
        {
          title: "GRT JV",
          color: "#B2EAAC",
        },
        {
          title: "Hailey Mandi",
          color: "#EAE29C",
        },
      ],
    },
    {
      heading: "Tenant Mix (MM sq.ft.)",
      icon: PSummaryGIcon,
      mainImage: PSummaryMainImage,
      city1: [
        {
          title: "Bagalur",
          color: "#FF9281",
        },
        {
          title: "Bhivandi",
          color: "#89D1E9",
        },
        {
          title: "Farukhnagar",
          color: "#BCACEA",
        },
      ],
      city2: [
        {
          title: "GRT JV",
          color: "#B2EAAC",
        },
        {
          title: "Hailey Mandi",
          color: "#EAE29C",
        },
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);
  const [isMobile2, setIsMobile2] = useState(false);

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
      <div className="portfolio-summary">
        {!isMobile && <MainMenu />}
        <div className="portfolio-summary-container">
          <div className="folio-no">
            <button className="poppins-medium">Folio no - 123456</button>
          </div>
          <div className="portfolio-summary-text">
            <h3 className="poppins-bold">Portfolio Summary</h3>
            <div className="portfolio-summary-img">
              <img
                onClick={() => setIsMobile2(true)}
                src={PSummary1}
                alt="single lists"
                style={{ cursor: "pointer" }}
              />
              <img
                onClick={() => setIsMobile2(false)}
                src={PSummary2}
                alt="Multi Lists"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div id={`main-container${isMobile2 ? "-active" : ""}`}>
            {content.map((item, index) => (
              <div
                className={`portfolio-summary-content-container ${
                  isMobile2 ? "portfolio-summary-content-container-1" : ""
                }`}
              >
                <div className="portfolio-summary-heading">
                  <h2 className="poppins-bold" style={{ margin: "0" }}>
                    {item.heading}
                  </h2>
                  <img
                    class="btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={item.heading}
                    style={{
                      objectFit: "contain",
                      display: "block",
                      margin: "0",
                    }}
                    src={item.icon}
                    alt="icon"
                  />
                </div>
                <img
                  src={item.mainImage}
                  style={{
                    objectFit: "contain",
                    width: isMobile ? "100%" : "100%",
                    height: "auto",
                  }}
                  alt="main image"
                />
                <div className="city-container">
                  <div className="city1">
                    {item.city1.map((item, index) => (
                      <div key={index} className="city1">
                        <div
                          style={{
                            backgroundColor: item.color,
                          }}
                          className="city1-box"
                        ></div>
                        <p style={{ margin: "0" }}>{item.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="city1">
                    {item.city2.map((item, index) => (
                      <div key={index} className="city1">
                        <div
                          style={{
                            backgroundColor: item.color,
                          }}
                          className="city1-box"
                        ></div>
                        <p style={{ margin: "0" }}>{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSummary;
