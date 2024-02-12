"use client";

import Image from "next/image";
import profile from "../../../public/images/Profile.svg";
import star from "../../../public/images/Star-green.svg";
import redStar from "../../../public/images/Star-red.svg";
import info from "../../../public/images/Info Circle.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";

export default function page() {
  const [userinfoShow, setUserinfoShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div className="min-h-[70vh]">
      <div className="mt-6 flex items-center gap-4">
        <Image src={profile} height={20} width={20} />
        <p className="font-[800] text-2xl mr-auto">User Information</p>
        <SlOptionsVertical
          className="text-xl"
          onClick={() => setUserinfoShow(!userinfoShow)}
        />
      </div>
      {userinfoShow && (
        <div>
          <div
            className="fixed left-0 right-0 bottom-0 top-0 opacity-80 z-50"
            onClick={() => setUserinfoShow(false)}
          ></div>
          <div
            onClick={() => setShowModal(true)}
            className="absolute w-[247px] transform translate-x-[110px] translate-y-2 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F] flex gap-4 items-center"
          >
            <Image src={profile} height={20} width={20} />
            <p>Become Normal User</p>
          </div>
        </div>
      )}

      <div className="px-2 py-5">
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">Name</p>
          <p>Dave dus</p>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">Employer ID </p>
          <p>EEEEEEEEEEEEEEEE</p>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">Role </p>
          <div className="flex gap-2 items-center">
            <Image src={star} height={20} width={20} />
            <p className="text-[#3AC0A0]">Admin</p>
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">LinkedIn Profile</p>
          <p>www.linkeddave.in</p>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">Position in company</p>
          <p>HR</p>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-[#C5C6CC]">Corporate Email</p>
          <p>vrvrvr@google</p>
        </div>
      </div>

      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed left-0 right-0 bottom-0 top-0 bg-[#1F2024] opacity-80 z-50"
          ></div>
          <div className="fixed h-[290px] w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F]">
            {!modalToggle && (
              <>
                <div className="flex flex-col gap-3 items-center mt-5 mb-6 mx-4">
                  <Image src={redStar} width={50} height={50} />
                  <p className="font-[800] leading-5 tracking-wide text-center">
                    Do you really want to leave Admin Position?
                  </p>
                  <p className="text-[12px] text-[#C5C6CC] text-center">
                    You will be revoked from all rights of admin and will become
                    a normal user. Please reconfirm.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-inherit text-white text-[14px] outline outline-white font-semibold px-4 py-3 w-full rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setModalToggle(!modalToggle)}
                    className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg"
                  >
                    Confirm
                  </button>
                </div>
              </>
            )}
            {modalToggle && (
              <>
                <div className="flex flex-col gap-3 items-center mt-7 mb-6 mx-4">
                  <Image src={info} width={50} height={50} />
                  <p className="font-[800] leading-5 tracking-wide text-center">
                    Invalid Request.
                  </p>
                  <p className="text-[12px] text-[#C5C6CC] text-center">
                    You are the only one admin. Please assign other user as
                    admin before leaving or downgrading your postion.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-inherit text-white text-[14px] outline outline-white font-semibold px-4 py-3 w-full rounded-lg"
                  >
                    Cancel
                  </button>
                  {/* <button className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg">
                    Confirm
                  </button> */}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
