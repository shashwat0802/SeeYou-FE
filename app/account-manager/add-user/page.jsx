"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import ticketImage from "../../../public/images/ticket-star.svg";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const goback = () => {
    router.push('/account-manager');
  };

  const seeCode = () => {
    router.push('/account-manager/add-user/generate-code')
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="px-4 py-3">
        <div className="flex gap-2 items-center text-lg">
          <IoIosArrowBack className="text-[25px]" onClick={goback} />
          <p>Add User</p>
        </div>

        <div className="py-2 px-1">
          <div className="rounded-lg h-2 bg-[#34373F]">
            <div className="rounded-lg h-2 bg-white w-[50%]"></div>
          </div>
        </div>

        <div className="mt-6 mx-1">
          <p className="font-[900] text-[24px]">Enter Details</p>
          <p className="text-[#FF616D]">*Marked fields are mandatory</p>
        </div>

        <div className="mt-8">
          <input
            placeholder="Corporate Email*"
            type="email"
            className="w-full rounded-lg text-white h-[48px] px-2 bg-inherit outline outline-[#C5C6CC]"
          />
          <button
            onClick={() => setShowModal(true)}
            className="w-full h-[48px] text-black text-[14px] font-semibold bg-white outline ouline-white rounded-xl flex justify-center items-center mt-6"
          >
            Send Mail Request
          </button>
        </div>

        <p className="mt-14 text-[14px] text-center text-[#C5C6CC]">
          Clicking on send mail, It will generate a 4 digit code which requested
          candidate has to fill.
        </p>
      </div>

      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="fixed left-0 right-0 bottom-0 top-0 bg-[#1F2024] opacity-80 z-50"
          ></div>
          <div className="fixed h-[260px] w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F]">
            <div className="flex flex-col gap-3 items-center mt-5 mb-6 mx-4">
              <Image src={ticketImage} width={50} height={50} />
              <p className="font-[800] leading-5 tracking-wide">
                Request Mail Sent
              </p>
              <p className="text-[12px] text-[#C5C6CC] text-center">
                The user will be added once requested user accepts request and
                fill code.
              </p>
            </div>
            <button onClick={seeCode} className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg">
              See Code To share
            </button>
          </div>
        </div>
      )}
    </>
  );
}
