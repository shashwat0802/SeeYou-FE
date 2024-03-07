'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import textLogoPath from '@/public/images/text-logo.svg';
import placeholder from '@/public/images/placeholder.svg';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { CiBookmarkMinus, CiDiscount1, CiSearch, CiUser } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';
import { PiBuildingsBold } from 'react-icons/pi';
import Cookies from 'js-cookie';

const RecruiterNavbar = () => {
  const handleLogout = () => {
    Cookies.remove('jwt');
    Cookies.remove('role');
    router.push('/signin');
  };
  return (
    <div>
      <>
        <div>
          <input type="checkbox" id="menu-open" className="hidden" />

          <header
            className="bg-[#22242D] text-gray-100 flex justify-between md:hidden"
            data-dev-hint="mobile menu bar"
          >
            <Link
              href="/dashboard/recruiter"
              className={`block p-4 text-white font-bold whitespace-nowrap truncate`}
            >
              <Image src={textLogoPath} height={25} width={70} />
            </Link>

            <label
              htmlFor="menu-open"
              id="mobile-menu-button"
              className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
            >
              <svg
                id="menu-open-icon"
                className="h-6 w-6 transition duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                id="menu-close-icon"
                className="h-6 w-6 transition duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </header>

          <aside
            id="sidebar"
            className="bg-[#22242D] text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto mt-12"
            style={{ zIndex: '999' }}
            data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
          >
            <div
              className="flex flex-col space-y-8"
              data-dev-hint="optional div for having an extra footer navigation"
            >
              <nav data-dev-hint="main navigation">
                <Link
                  href="/dashboard/recruiter"
                  className="flex items-center space-x-4 mb-6 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <GoHome />
                  </span>

                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/application/recruiter"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <IoBriefcaseOutline />
                  </span>

                  <span>Applications</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <CiSearch />
                  </span>

                  <span>Search Visible Candidates</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl font-bold">
                    <CiBookmarkMinus />
                  </span>

                  <span>Saved Applications</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl font-bold">
                    <CiDiscount1 />
                  </span>

                  <span>Plans & Pricing</span>
                </Link>
                <Link
                  href="/notification"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <IoMdNotificationsOutline />
                  </span>

                  <span>Notifications</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <PiBuildingsBold />
                  </span>

                  <span>Company Page</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl">
                    <CiUser />
                  </span>

                  <span>Account Manager</span>
                </Link>
                {/* <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-xl font-black">
                    <IoSettingsOutline />
                  </span>

                  <span>Settings</span>
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-4  py-2 mt-6 px-4 transition duration-200 hover:bg-gray-700 hover:text-[#FF616D] text-[#FF616D] text-base"
                >
                  <span className="text-xl">
                    <IoIosLogOut />
                  </span>

                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>
        </div>

        {/* desktop recruiter navbar */}
        <nav className="flex justify-between hidden md:flex items-center container mx-auto py-4">
          <div>
            <Image src={textLogoPath} height={45} width={80} />
          </div>
          <div className="flex items-center">
            <ul className="flex">
              <li>
                <Link
                  href="#"
                  className="flex items-center space-x-4 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span>Applications</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span>Saved Applications</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-2xl">
                    <IoMdNotificationsOutline />
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="flex items-center space-x-4  py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white text-base"
                >
                  <span className="text-2xl font-black">
                    <IoSettingsOutline />
                  </span>
                </Link>
              </li> */}
            </ul>
            <div className="grid grid-cols-5 p-2 bg-transparent w-48 border border-white-20 place-items-center rounded-[24px] ml-4">
              <Image
                src={placeholder}
                height={40}
                width={40}
                className="mx-2"
              />
              <div className="text-xs col-span-3">
                <p className="font-bold">Ciprian Lopata</p>
                <p>My Account</p>
              </div>
              <button className="text-xs">
                <FaChevronDown />
              </button>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default RecruiterNavbar;
