import React from "react";
import navigation from "./navigation";
import provider from "./provider";

function App() {
  return (
    <provider.AppProvider>
      <navigation.SwitchNavigation />
    </provider.AppProvider>
  );
}

export default App;
