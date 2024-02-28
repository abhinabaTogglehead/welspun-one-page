import { LogoImg } from "../assets";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Navbar2.scss";
import MainMenu from "./MainMenu";
import { useState } from "react";
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

import { Button, Menu, Dropdown, Space } from "antd";
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
function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  navigate = useNavigate();
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  console.log(isMobile);
  return (
    <>
      <div className="navbar-container">
        <div className="mobile-navbar">
          <Dropdown
            menu={{
              items,
               
            }}
            trigger={["click"]}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="ant-dropdown-link"
            >
              <HiMenuAlt1 id="menu-icon" onClick={handleClick} />
            </a>
          </Dropdown>
          <img src={LogoImg} alt="main logo" id="logo-img" />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Navbar2;
