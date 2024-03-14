"use client";

import Image from "next/image";
import { useState } from "react";
import { BsBookmarkDashFill } from "react-icons/bs";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";

const stars = 4;

const SavedApplications = () => {
  let [isActive, setIsActive] = useState(true);
  let [content, setContent] = useState([{}]);

  let [openFilter, setOpenFilter] = useState(false);
  let [showModal, setShowModal] = useState(false);

  const starArray = [];
  for (let i = 0; i < stars; i++) {
    starArray.push(
      <Image src={require("../../../../public/images/Star Filled.svg")} />
    );
  }
  return (
    <div className="p-2 min-h-[60vh]">
      <div className="rounded-lg flex bg-[#34373F] p-3 items-center w-full justify-between text-lg my-4">
        <button onClick={""}>
          <FaSearch />
        </button>
        <input
          type="search"
          id="job-application"
          name="application-job"
          placeholder="Search “Saved Candidate”"
          className="placeholder:text-[#8F9098] bg-transparent focus:outline-none placeholder:text-sm ml-2"
        />
        <button>
          <LuFilter />
        </button>
      </div>

      <div className="bg-[#1F222A] rounded-lg flex items-center">
        <div
          className={`flex items-center justify-center text-center w-1/2 p-2 rounded-lg ${
            isActive
              ? "text-white bg-[#34373F]"
              : "bg-transparent text-[#71727A]"
          }`}
          onClick={() => {
            setIsActive(true);
          }}
        >
          From Applications
        </div>
        <div
          className={`flex items-center justify-center text-center w-1/2 p-2 rounded-lg ${
            !isActive
              ? "text-white bg-[#34373F]"
              : "bg-transparent text-[#71727A]"
          }`}
          onClick={() => {
            setIsActive(false);
          }}
        >
          From Search
        </div>
      </div>

      <div className="my-4 mx-1 flex justify-between items-center">
        <p className=" font-bold text-xl ">2 Saved Applications</p>
        <Image
          src={require("../../../../public/images/Right Button.svg")}
          className="w-[20px] h-[20px] cursor-pointer"
          color={openFilter && "green"}
          onClick={() => setOpenFilter(!openFilter)}
        />
        {openFilter && (
          <div className="absolute">
            <div
              className="fixed left-0 right-0 bottom-0 top-0 opacity-80 z-50"
              onClick={() => setOpenFilter(false)}
            ></div>
            <div
              onClick={""}
              className="absolute w-[200px] transform translate-x-[140px] translate-y-4 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F] flex flex-col gap-2"
            >
              <p>Alphabetical (A to Z)</p>
              <p>Newest</p>
              <p>Oldest</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 rounded-lg bg-[#1F222A]">
        <div className="flex gap-2">
          <Image
            src={require("../../../../public/images/person-img.svg")}
            className="rounded-md w-[100px] h-[100px]"
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="flex gap-2 text-xs p-1 bg-gray-800 rounded-md">
                <p>Viewed</p>
                <div className="flex text-[#2897FF]">
                  {starArray}
                  <p>(Good)</p>
                </div>
              </div>
              <p className="text-[#D4D6DD] mt-2">John Brunos</p>
              <p className="font-extrabold text-xl mt-1">UI/UX Designer</p>
            </div>
            <div>
              <BsBookmarkDashFill
                size={22}
                onClick={() => setShowModal(true)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-light mt-2 text-sm">
          <p>Received: 21/03/23</p>
          <p className="flex items-center gap-1 text-[#2897FF] underline">
            View Profile{" "}
            <span>
              <FaChevronRight />
            </span>
          </p>
        </div>
        <p className="mt-4 font-light">
          <span className="font-bold">Comment: </span>Your account is
          successful, you can now apply jobs with our services.
        </p>
      </div>

      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed left-0 right-0 bottom-0 top-0 bg-[#1F2024] opacity-80 z-50"
          ></div>
          <div className="fixed h-auto w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F]">
            <div className="flex flex-col gap-3 items-center mt-5 mb-6 mx-4">
              <p className="font-[800] leading-5 tracking-wide text-center">
                Remove from saved?
              </p>
              {/* <div>
                
              </div> */}
            </div>
            <div className="flex gap-3">
              <button
                onClick={"() => setShowModal(false)"}
                className="bg-inherit text-white text-[14px] outline outline-white font-semibold px-4 py-3 w-full rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={"() => setModalToggle(!modalToggle)"}
                className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg"
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedApplications;
