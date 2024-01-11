// 390x844
// დესკტოპზე (1920x1080)

import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import EmployeeInfo from "./pages/employee-info/EmployeeInfo";
import LaptopInfo from "./pages/laptop-info/LaptopInfo";
import LaptopList from "./pages/laptop-list/LaptopList";
import ErrorPage from "./pages/error-page/ErrorPage";
import LaptopData from "./pages/laptop-data/LaptopData";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/employee-info" element={<EmployeeInfo />} />
      <Route path="/laptop-info" element={<LaptopInfo />} />
      <Route path="/laptop-list" element={<LaptopList />} />
      <Route path="/laptop-data" element={<LaptopData />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
