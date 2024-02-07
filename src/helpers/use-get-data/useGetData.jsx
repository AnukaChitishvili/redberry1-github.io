import { useState } from "react";

const useGetData = () => {
  const [laptopList, setLaptopList] = useState([]);

  return {
    laptopList,
    setLaptopList,
  };
};

export default useGetData;
