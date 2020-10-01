import React, { FunctionComponent } from "react";
import "./Header.css";
import { AppBar } from "@material-ui/core";

type HeaderProps = {
  title: string;
  onClick?: React.MouseEventHandler;
  color: "primary";
  position?: "sticky";
};

const CustomHeader: FunctionComponent<HeaderProps> = ({ title, color }) => (
  <AppBar color={color} position="sticky">
    <h1 className="Header">{title}</h1>
  </AppBar>
);

export default CustomHeader;
