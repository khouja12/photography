import React, { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();
const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariants, setCursorVariants] = useState({});

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []); 

  useEffect(() => {
    setCursorVariants({
      default: {
        x: cursorPos.x - 16,
        y: cursorPos.y - 16,
        backgroundColor: "black",
      },
    });
  }, []); 

  return (
    <CursorContext.Provider value={{ cursorVariants }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
