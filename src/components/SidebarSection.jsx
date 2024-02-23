import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import "./SidebarSection.scss";
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
import { useNavigate } from "react-router-dom";

function SidebarSection() {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar
        className="sidebar-section"
        image="https://images.unsplash.com/photo-1690321607902-d97c4b909a23?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzE4ODU4fHxlbnwwfHx8fHw%3D"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            height: "88vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "start",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(50px)", // Adjust the blur value as needed
            "-webkit-backdrop-filter": "blur(50px)", // For Safari
            overflowY: "auto",
          },
        }}
      >
        <div className="logo-container">
          <img src={Mainlogo} alt="main logo" />
        </div>
        <Menu style={{ objectFit: "contain" }} className="poppins-bold">
          <MenuItem>
            <img src={InvestmentSummery} alt="investment summery" /> Investment
            Summary{" "}
          </MenuItem>
          <SubMenu
            label="Portfolio Dashboard"
            icon={<img src={PortFolioDashboard} alt="portfolio dashboard" />}
          >
            <MenuItem
              className="menu-item"
              icon={<img src={PortFolioSummery} alt="portfolio summery" />}
              onClick={() => navigate("/portfoliosummary")}
            >
              Portfolio Summary
            </MenuItem>
            <SubMenu
              label="Project-wise Update"
              className="menu-item"
              icon={<img src={ProjectWiseUpdate} alt="project wise update" />}
            >
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
                onClick={() => navigate("/bagalur")}
              >
                Bagalur
              </MenuItem>
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
                onClick={() => navigate("/bhiwandi")}
              >
                Bhiwandi
              </MenuItem>
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
              >
                Farukhnagar
              </MenuItem>
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
              >
                GRT JV
              </MenuItem>
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
              >
                Lucknow
              </MenuItem>
              <MenuItem
                className="menu-item"
                icon={<img src={Locations} alt="locations" />}
              >
                Hailey Mandi
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem icon={<img src={Statements} alt="statements" />}>
            Statement{" "}
          </MenuItem>
          <MenuItem icon={<img src={Reports} alt="reports" />}>
            {" "}
            Report{" "}
          </MenuItem>
          <MenuItem icon={<img src={Documents} alt="documents" />}>
            {" "}
            Document{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="logout-container poppins-bold">
        <img src={Logout} alt="logout" />
        <p>Logout</p>
      </div>
    </>
  );
}

export default SidebarSection;
