import { useEffect, useRef, useState } from "react";
import TestModal from "./TestModal";

const ParentTest = () => {
  const someRef = useRef();
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   console.log("works", someRef.current);
  // }, []);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (someRef.current.contains(event.target)) {
        setModal(false);
      }
    });
  });

  const openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <button>Click</button>
      <TestModal innerRef={someRef} />
    </div>
  );
};

export default ParentTest;
