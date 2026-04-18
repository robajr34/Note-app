"use client";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="w-full flex h-15 items-center justify-between mb-10 relative">
      <div className="flex gap-2 pl-4 flex-1 md:flex-0 lg:flex-0 xl:flex-0 ">
        <span
          onClick={() => router.push("/")}
          className="font-semibold text-xl font-bold cursor-pointer"
        >
          {" "}
          📝 Note
        </span>
      </div>
      <ul className=" hidden list-none md:flex lg:flex gap-4 items-center bg-gray-800 py-2 px-5 rounded-full ">
        <li
          className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
          onClick={() => router.push("/")}
        >
          Home
        </li>
        <li
          onClick={() => router.push("/about")}
          className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
        >
          About
        </li>
        <li
          onClick={() => router.push("/contact")}
          className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
        >
          Contact
        </li>
      </ul>
      <div className="flex flex-row mr-10 flex-1 md:flex-0 lg:flex-0 xl:flex-0 justify-between">
        <button
          onClick={() => router.push("/new")}
          className="py-1.5 px-5 rounded-full bg-white text-black  hover:shadow-2xl text-sm hover:bg-gray-200 cursor-pointer"
        >
          Create
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="flex lg:hidden md:hidden xl:hidden size-8 items-center "
        >
          <Menu />
        </button>
        <ul
          className={`
        ${isOpen ? "flex" : "hidden"} 
        flex-row w-full justify-center gap-4 mt-2 sm:hidden absolute left-0 top-12 items-center bg-gray-800 py-2 px-5 rounded-full
      `}
        >
          <li
            className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            onClick={() => router.push("/about")}
            className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
          >
            About
          </li>
          <li
            onClick={() => router.push("/contact")}
            className="text-sm cursor-pointer px-2 py-1 rounded-full hover:bg-white hover:text-black"
          >
            Contact
          </li>
          <button onClick={()=> setIsOpen(false)}>
            <X />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
