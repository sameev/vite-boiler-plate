import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Vite React Boiler Plate</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
