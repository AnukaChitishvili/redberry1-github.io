import { useEffect } from "react";
const useOutsideClickHandler = (ref, handler) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      return;
    } else {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useOutsideClickHandler;
