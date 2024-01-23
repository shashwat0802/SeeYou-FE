"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function page() {
  const router = useRouter();
  const goback = () => {
    router.back();
  };

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
          <button className="w-full h-[48px] text-black text-[14px] font-semibold bg-white outline ouline-white rounded-xl flex justify-center items-center mt-6">
            Send Mail Request
          </button>
        </div>

        <p className="mt-14 text-[14px] text-center text-[#C5C6CC]">
          Clicking on send mail, It will generate a 4 digit code which requested
          candidate has to fill.
        </p>
      </div>
    </>
  );
}
