import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import { ContextProvider } from "./Context/ContextMenu";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
