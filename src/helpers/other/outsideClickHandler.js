import { useEffect } from "react";
const useOutsideClickHandler = (ref, handler) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      console.log("inside");
    } else {
      console.log("outside");
      // handler();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClickHandler;

// import { useState, useRef, useEffect } from "react";

// const OutsideClickHandler = (handler) => {
//   let domNodeRef = useRef(); // in our case popUp REf
//   const [modal, setModal] = useState(false);
//   const testRef = useRef();

//   useEffect(() => {
//     let maybeHandler = (e) => {
//       // maybe handler is gonna check if event happened outside the domNode, and if yes its gonna run passed in handler .
//       if (domNodeRef.current.contains(e.target)) {
//         // handler();
//         setModal(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     // return () => {
//     //   document.removeEventListener("mousedown", handler);
//     // };
//   });
//   return domNodeRef;
// };

// export default OutsideClickHandler;
