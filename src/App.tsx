import React from "react";
import Header from "./components/Header/Header";
import { Products } from "./pages/products";

function App() {
  return (
    <div>
      <Header title="Shopping Cart" color="primary"></Header>
      <Products></Products>
    </div>
  );
}

export default App;
