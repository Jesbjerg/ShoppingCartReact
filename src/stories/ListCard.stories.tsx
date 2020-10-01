import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ListCard } from "../components/ListCard/ListCard";

storiesOf("ListCard", module).add("with text", () => (
  <ListCard title="Banana" description="This is a hot banana"></ListCard>
));
