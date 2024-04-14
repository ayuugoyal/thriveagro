"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import { get_products_in_inventry } from "@/actions/inventry";
import { useEffect, useState } from "react";
import { Inventory } from "@/db/schema";

const Page = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [user_id, setUser_id] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await get_products_in_inventry();
      console.log("userProducts", products);
      setUserProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col items-center w-full">
        <div className="font-bold text-2xl mt-5">All listed products</div>
        <p>An overview of yours crops</p>
        <div className="grid grid-cols-4 gap-3">
          {userProducts.map((product, index) => {
            return <ProductDetails details={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
