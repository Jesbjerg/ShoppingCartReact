import { storiesOf } from "@storybook/react";
import * as React from "react";
import Header from "../components/Header/Header";

storiesOf("Header", module).add("Shopping Cart", () => (
  <Header title="Shopping Cart" color="primary"></Header>
));
