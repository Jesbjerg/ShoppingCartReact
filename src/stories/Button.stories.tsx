import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "../components/Button/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button title="Accept" color="primary" variant="contained"></Button>
  ))
  .add("without text", () => <Button title="no text"></Button>);
