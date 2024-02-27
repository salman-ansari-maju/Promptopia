"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden">{isUserLoggedIn}</div>
    </nav>
  );
};

export default Nav;
