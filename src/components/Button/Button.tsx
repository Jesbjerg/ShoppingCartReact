import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";

type ButtonProps = {
  title?: string;
  onClick?: React.MouseEventHandler;
  color?: "inherit" | "primary" | "secondary";
  variant?: "text" | "outlined" | "contained";
};

const CustomButton: FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  color,
  variant,
}) => (
  <Button
    className="Button"
    onClick={() => null}
    color={color}
    variant={variant}
  >
    {title}
  </Button>
);

export default CustomButton;
