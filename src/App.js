import { Routes, Route } from "react-router-dom";

import { DataContext } from "./context/dataContext";
import LandingPage from "./pages/landing-page/LandingPage";
import EmployeeInfo from "./pages/employee-info/EmployeeInfo";
import LaptopInfo from "./pages/laptop-info/LaptopInfo";
import LaptopList from "./pages/laptop-list/LaptopList";
import ErrorPage from "./pages/error-page/ErrorPage";
import LaptopData from "./pages/laptop-data/LaptopData";
import useGetData from "./helpers/use-get-data/useGetData";

export const App = () => {
  const { laptopList, setLaptopList } = useGetData();

  return (
    <DataContext.Provider value={{ laptopList, setLaptopList }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-laptop/employee-info" element={<EmployeeInfo />} />
        <Route path="/new-laptop/laptop-info" element={<LaptopInfo />} />
        <Route path="/laptop-list" element={<LaptopList />} />
        <Route path="/laptop-data" element={<LaptopData />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default App;
