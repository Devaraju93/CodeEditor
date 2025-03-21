import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image src="/logo.png" alt="LeetClone" height={200} width={200} />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-[#F97316] text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
           hover:text-[#F97316] hover:bg-white hover:border-2 hover:border-[#F97316] border-2 border-transparent
           transition duration-300 ease-in-out"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
