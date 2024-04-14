import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col items-center w-full">
        <div className="font-bold text-2xl mt-5">Your Orders</div>
        <div className="grid grid-cols-4 gap-3"></div>
      </div>
    </div>
  );
};

export default Page;
