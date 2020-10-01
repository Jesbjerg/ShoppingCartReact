import React, { FunctionComponent } from "react";
import { LinearProgress } from "@material-ui/core";

type LoaderProps = {};

const Loader: FunctionComponent<LoaderProps> = () => {
  return <LinearProgress color="primary" />;
};

export default Loader;
