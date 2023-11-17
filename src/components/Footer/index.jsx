import React from "react";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-[60px] bg-[#000035] flex justify-center items-center gap-6">
      <span className="text-white">Created by Wesley Teles</span>
      <FaReact size={22} color="#FFFFFF" />
    </footer>
  );
}
