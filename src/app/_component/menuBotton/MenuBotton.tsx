"use client";
import Link from "next/link";
import React, { useState } from "react";

const MenuBotton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <>
          <div className="flex flex-1  md:hidden items-center justify-end md:justify-between">
            <nav
              aria-label="Global"
              className=" block absolute right-0 top-16 bg-slate-600 w-full md:w-auto md:relative md:top-0 md:bg-transparent md:block z-50"
            >
              <ul className="flex flex-col md:flex-row items-center gap-6 text-sm p-4 md:p-0">
                <li>
                  <Link
                    className="transition hover:text-gray-500/75 text-white md:text-gray-600"
                    href="/Shooter"
                  >
                    Shooter
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-gray-500/75 text-white md:text-gray-600"
                    href="/Fantasy"
                  >
                    Fantasy
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-gray-500/75 text-white md:text-gray-600"
                    href="/Sport"
                  >
                    Sport
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-gray-500/75 text-white md:text-gray-600"
                    href="/Anime"
                  >
                    Anime
                  </Link>
                </li>
                <li>
                  <input
                    type="search"
                    className="outline-teal-500 p-3 focus:text-gray-700 rounded-xl w-full md:w-auto"
                    placeholder="Search..."
                  />
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MenuBotton;
