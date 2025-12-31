import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("blue"); // red | blue

  const toggleToRed = () => setMode("red");
  const toggleToBlue = () => setMode("blue");

  return (
    <ModeContext.Provider
      value={{
        mode,
        isRed: mode === "red",
        isBlue: mode === "blue",
        toggleToRed,
        toggleToBlue,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used inside ModeProvider");
  }
  return context;
};
