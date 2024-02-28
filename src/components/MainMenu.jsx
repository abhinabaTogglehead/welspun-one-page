import React, { useState, useEffect } from "react";
import "./MainMenu.scss";
import {
  InvestmentSummery,
  PortFolioDashboard,
  PortFolioSummery,
  ProjectWiseUpdate,
  Locations,
  Statements,
  Reports,
  Documents,
  Logout,
  Mainlogo,
} from "../assets";

import { Button, Menu,Dropdown,Space } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

function CustomIcon({ src, alt }) {
  return <img src={src} alt={alt} style={{ marginRight: "8px" }} />;
}
let navigate;
const subtheme = {
  backgroundColor: "red",
};

const items = [
  {
    key: "1",
    icon: <CustomIcon src={InvestmentSummery} alt="Investment Summary" />,
    label: "Investment Summary",
    onClick: () => navigate("/dashboard"),
  },
  {
    key: "sub1",
    icon: <CustomIcon src={PortFolioDashboard} alt="Portfolio Dashboard" />,
    label: "Portfolio Dashboard",
    children: [
      {
        key: "sub2",
        icon: <CustomIcon src={PortFolioSummery} alt="Portfolio Summary" />,
        label: "Portfolio Summary",
        onClick: () => navigate("/portfoliosummary"),
      },
      {
        key: "sub2",
        icon: <CustomIcon src={ProjectWiseUpdate} alt="Project-wise Update" />,
        label: "Project-wise Update",
        children: [
          {
            key: "11",
            icon: <CustomIcon src={Locations} alt="Bagalur" />,
            label: "Bagalur",
            onClick: () => navigate("/bagalur"),
          },
          {
            key: "12",
            icon: <CustomIcon src={Locations} alt="Bhiwandi" />,
            label: "Bhiwandi",
            onClick: () => navigate("/bhiwandi"),
          },
          {
            key: "13",
            icon: <CustomIcon src={Locations} alt="Farukhnagar" />,
            label: "Farukhnagar",
          },
          {
            key: "14",
            icon: <CustomIcon src={Locations} alt="GRT JV" />,
            label: "GRT JV",
          },
          {
            key: "15",
            icon: <CustomIcon src={Locations} alt="Lucknow" />,
            label: "Lucknow",
          },
          {
            key: "16",
            icon: <CustomIcon src={Locations} alt="Hailey Mandi" />,
            label: "Hailey Mandi",
          },
        ],
      },
    ],
  },
  {
    key: "2",
    icon: <CustomIcon src={Statements} alt="Statement" />,
    label: "Statement",
  },
  {
    key: "3",
    icon: <CustomIcon src={Reports} alt="Report" />,
    label: "Report",
  },
  {
    key: "4",
    icon: <CustomIcon src={Documents} alt="Document" />,
    label: "Document",
  },
];

const MainMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // const handleClick = (route) => {
  //   navigate(route);
  // };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 834);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`main-menu${isMobile ? "-mobile" : ""}`}>
      <div className="logo-container">
        <img src={Mainlogo} alt="main logo" />
      </div>
      <Menu
        mode="inline"
        theme={subtheme}
        inlineCollapsed={collapsed}
        items={items}
        className={`menu-items${isMobile ? "-mobile" : ""}`}
      />
      <div className={`logout-container${isMobile ? "-mobile" : ""}`}>
        <img src={Logout} alt="logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MainMenu;
