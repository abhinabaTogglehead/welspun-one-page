import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginSection from "../components/LoginSection";
import InvestmentSummery from "../components/InvestmentSummery";
import PortfolioSummary from "../components/PortfolioSummary";
import Bagalur from "../components/Bagalur";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSection />} />
        <Route path="/dashboard" element={<InvestmentSummery />} />
        <Route path="portfoliosummary" element={<PortfolioSummary />} />
        <Route path="bagalur" element={<Bagalur />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
