import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around text-2xl bg-blue-500 text-white py-2">
      <h1>Logo</h1>
      <ul className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
