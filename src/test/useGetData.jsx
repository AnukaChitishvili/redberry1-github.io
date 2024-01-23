import { useState, useEffect } from "react";

const useGetData = () => {
  const [laptopList, setLaptopList] = useState([]);
  useEffect(() => {
    const retrievedData = localStorage.getItem("values");
    if (retrievedData) {
      setLaptopList(JSON.parse(retrievedData)); // prevState chavamateb
    }
  }, []);
  return {
    laptopList,
    setLaptopList,
  };
};

export default useGetData;

// localStorage.removeItem('values')
