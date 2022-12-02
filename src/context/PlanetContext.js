import React from "react";

const PlanetContext = React.createContext();

const PlanetProvider = ({ children }) => {
  const [focus, setFocus] = React.useState({});

  return (
    <PlanetContext.Provider value={{ focus, setFocus }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider, PlanetContext as default };