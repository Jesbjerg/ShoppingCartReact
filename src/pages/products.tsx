import React, { useEffect, useState } from "react";
import { Product } from "../models/product";
import axios from "axios";
import { ListCard } from "../components/ListCard/ListCard";
import { CircularProgress, Input } from "@material-ui/core";

export function Products() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    fetchProductsAsync();
  }, []);
  const [inputChars, setInputChars] = useState<string>("");

  const fetchProductsAsync = async () => {
    const results = await axios.get<Product[]>(
      "https://localhost:5001/products"
    );
    setProducts(results.data);
  };
  const filteredProducts = products?.filter((sProduct) => {
    return sProduct.name.toLowerCase().includes(inputChars.toLowerCase());
  });
  const productFilterOnChange = (event: { target: { value: any } }) => {
    setInputChars(event?.target.value);
  };

  return (
    <div>
      <div style={{ padding: "10px 45px" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1 style={{ margin: "20px 0 0 40px" }}>Products</h1>
          <Input
            style={{ marginTop: "20px", marginLeft: "100px", height: "40px" }}
            placeholder="Search..."
            onChange={productFilterOnChange}
            value={inputChars}
          ></Input>
        </div>
        {products && products.length > 0 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul>
              {filteredProducts?.map((product, i) => (
                <ListCard
                  title={product.name}
                  description={product.description}
                  key={i}
                ></ListCard>
              ))}
            </ul>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <CircularProgress
              disableShrink
              style={{ marginTop: "1rem" }}
            ></CircularProgress>
          </div>
        )}
      </div>
    </div>
  );
}
