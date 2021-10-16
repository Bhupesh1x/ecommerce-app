import React from "react";
import Routes from "./Routes";
import { DataProvider } from "./DataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <Routes />
      </DataProvider>
    </>
  );
};

export default App;
