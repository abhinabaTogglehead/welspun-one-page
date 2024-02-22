import React, { useEffect } from "react";
import "./PortfolioSummary.scss";
import SidebarSection from "./SidebarSection";
import {
  PSummary1,
  PSummary2,
  PSummaryGIcon,
  PSummaryMainImage,
} from "../assets";
function PortfolioSummary() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  return (
    <div className="portfolio-summary">
      <SidebarSection />
      <div className="portfolio-summary-container">
        <div className="folio-no">
          <button className="poppins-medium">Folio no - 123456</button>
        </div>
        <div className="portfolio-summary-text">
          <h3 className="poppins-bold">Portfolio Summary</h3>
          <div className="portfolio-summary-img">
            <img
              onClick={() => setIsMobile(true)}
              src={PSummary1}
              alt="single lists"
            />
            <img
              onClick={() => setIsMobile(false)}
              src={PSummary2}
              alt="Multi Lists"
            />
          </div>
        </div>
        <div
          id="main-container"
          style={{
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1em" : "auto",
          }}
        >
          {content.map((item, index) => (
            <div
              className={`portfolio-summary-content-container ${
                isMobile && "portfolio-summary-content-container-1"
              }`}
            >
              <div className="portfolio-summary-heading">
                <h2 className="poppins-bold" style={{ margin: "0" }}>
                  {item.heading}
                </h2>
                <img
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
                style={{ objectFit: "contain", width: "100%" }}
                alt="main image"
              />
              <div className="city-container">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5em",
                  }}
                >
                  {item.city1.map((item, index) => (
                    <div
                      key={index}
                      className="city1"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: item.color,
                          height: "1em",
                          width: "1em",
                        }}
                      ></div>
                      <p style={{ margin: "0" }}>{item.title}</p>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5em",
                  }}
                >
                  {item.city2.map((item, index) => (
                    <div
                      key={index}
                      className="city2"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: item.color,
                          height: "1em",
                          width: "1em",
                        }}
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
  );
}

export default PortfolioSummary;
