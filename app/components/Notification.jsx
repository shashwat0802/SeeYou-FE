"use client";
import Image from "next/image";
import React, { useState } from "react";
import emptyLogo from "@/public/images/empty.svg";
import { FaChevronRight, FaExclamationCircle } from "react-icons/fa";
import newLogo from "@/public/images/new-logo.svg";
import placeholder from "@/public/images/placeholder-2.svg";
import { BsBookmarkDash } from "react-icons/bs";

const Notification = ({ role }) => {
  let [isActive, setIsActive] = useState(true);
  let [content, setContent] = useState([{}]);

  return (
    <div className="p-4">
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
          General
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
          Application
        </div>
      </div>
      {/* notification  general*/}
      {isActive && content.length !== 0 && (
        <div>
          <div className="flex justify-end my-4">
            <button className="text-xs">Clear all</button>
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <Image src={newLogo} width={25} height={25} />
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <p className="text-xs">18:35 PM</p>
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <p className="text-xs">18:35 PM</p>
          </div>
        </div>
      )}
      {!isActive && content.length !== 0 && (
        <>
        <div>
          <div className="flex justify-end my-4">
            <button className="text-xs">Clear all</button>
          </div>
          <div className="rounded-lg flex items-center bg-[#1f222a] p-4 border border-[#35383f] my-2">
            <Image height={110} width={80} alt="#" src={placeholder} />
            <div className="mx-4">
              <p className="text-white text-lg">Product Management</p>
              <p className="text-[#71727A] text-sm mb-2">GothaCapital</p>
              <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                Video Application sent
              </div>
            </div>
          </div>
        </div>
        
        {/* notification application card */}
        <div className="p-3 rounded-lg bg-[#1F222A]">
        <div className="flex gap-2">
          <Image
            src={require("../../public/images/woman.svg")}
            className="rounded-md w-[100px] h-[100px]"
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="flex gap-2 text-xs p-1 bg-gray-800 rounded-md">
                <div className="flex text-[#2897FF]">
                  <p>Unread</p>
                </div>
              </div>
              <p className="text-[#D4D6DD] mt-2">John Brunos</p>
              <p className="font-extrabold text-xl mt-1">UI/UX Designer</p>
            </div>
            <div>
              <BsBookmarkDash
                size={22}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-light mt-2 text-sm">
          <p>Received: 15 min ago</p>
          <p className="flex items-center gap-1 text-[#2897FF] underline">
            View Profile{" "}
            <span>
              <FaChevronRight />
            </span>
          </p>
        </div>
      </div>
        </>
      )}
 

      {content.length === 0 && (
        <div className="my-12">
          <Image width={350} height={250} src={emptyLogo} />
          <h1 className="text-center text-2xl font-black">Empty</h1>
          <p className="text-center my-2">
            You don’t have any notifications at this time
          </p>
        </div>
      )}
    </div>
  );
};

export default Notification;
