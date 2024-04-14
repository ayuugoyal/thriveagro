"use client";
import React from "react";
import Image from "next/image";
import { Home, LogOut, ListTodo, BadgeAlert, NotebookTabs } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { log_out } from "@/actions/user";
import { toast } from "sonner";

const Navbar = () => {
  const loggingout = async () => {
    const rsponse: Boolean = await log_out();
    if (rsponse) {
      toast.success("Logged out successfully");
      window.location.href = "/";
    } else toast.error("Error logging out");
  };
  return (
    <div>
      <div className="flex flex-col w-56 p-5 gap-7 bg-[#a16207] text-white h-screen">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width="40" height="25" />
          <h1 className="font-semibold text-xl">ThriveAgro</h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-2">
            <Link href={"/dashboard"}>
              <div className="flex gap-2 hover:bg-[#ffbc6b] hover:text-black p-3 rounded-md cursor-pointer">
                <Home />
                Home
              </div>
            </Link>
            <Link href={"/inventary"}>
              <div className="flex gap-2 hover:bg-[#ffbc6b] hover:text-black p-3 rounded-md cursor-pointer">
                <ListTodo />
                My inventary
              </div>
            </Link>
            <Link href={"/seva-sangh"}>
              <div className="flex gap-2 hover:bg-[#ffbc6b] hover:text-black p-3 rounded-md cursor-pointer">
                <BadgeAlert />
                Report an issue
              </div>
            </Link>
            <Link href={"/orders"}>
              <div className="flex gap-2 hover:bg-[#ffbc6b] hover:text-black p-3 rounded-md cursor-pointer">
                <NotebookTabs />
                My orders
              </div>
            </Link>
          </div>
          <div>
            <Button
              className="hover:bg-[#FF0000] space-x-2 w-full bg-[#ffbc6b] text-black p-3 rounded-md cursor-pointer"
              onClick={() => {
                loggingout();
              }}
            >
              <LogOut /> <div>Logout</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
