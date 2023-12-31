import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import MenuMobile from "../MenuMobile";
import MenuSideBar from "../MenuSideBar";

export default function Navigation() {
  const [nav, setNave] = useState(false);

  const handleNav = () => {
    setNave(!nav);
  };

  return (
    <>
      {nav ? (
        <>
          <AiOutlineClose
            onClick={handleNav}
            size={28}
            className="absolute top-5 right-5 z-[99] md:hidden"
          />
          <MenuMobile handleNav={handleNav} />
        </>
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          size={28}
          className="absolute top-5 right-5 z-[99] md:hidden"
        />
      )}
      <MenuSideBar />
    </>
  );
}
