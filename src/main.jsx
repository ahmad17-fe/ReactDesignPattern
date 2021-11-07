import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SplitScreenApp from "./1.LayoutComponents/SplitScreen/App";
import ListItemApp from "./1.LayoutComponents/ListItem/App";
import ModalApp from "./1.LayoutComponents/Modal/App";
import ContainerApp from "./2.ContainerComponents/App";
import UncontrolledControlledApp from "./3.UncontrolledandControlledComponent/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <SplitScreenApp /> */}
    {/* <ListItemApp /> */}
    {/* <ModalApp /> */}
    {/* <ContainerApp /> */}
    <UncontrolledControlledApp />
  </React.StrictMode>,
  document.getElementById("root")
);
