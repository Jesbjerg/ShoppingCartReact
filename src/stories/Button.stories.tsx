import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "../components/Button/Button";

storiesOf("Button", module).add("Shopping Cart", () => (
  <Button title="Confirm" color="primary"></Button>
));
