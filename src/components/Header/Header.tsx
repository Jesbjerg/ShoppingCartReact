import React, { FunctionComponent } from "react";
import "../styling/variables.less";
import { AppBar } from "@material-ui/core";
type HeaderProps = {
  title?: string;
  onClick?: React.MouseEventHandler;
  color?: "inherit" | "primary" | "secondary";
  position?: "sticky";
};

const CustomHeader: FunctionComponent<HeaderProps> = ({ title, color }) => (
  <AppBar color={color} position="sticky">
    <h1>{title}</h1>
  </AppBar>
);

export default CustomHeader;
