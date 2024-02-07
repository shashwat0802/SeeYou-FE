"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function () {
  const router = useRouter();
  const goback = () => {
    router.back();
  };

  return (
    <>
      <div className="px-4 py-3 min-h-[70vh]">
        <div className="flex gap-2 items-center text-lg">
          <IoIosArrowBack className="text-[25px]" onClick={goback} />
          <p>Add User</p>
        </div>

        <div className="py-2 px-1">
          <div className="rounded-lg h-2 bg-[#34373F]">
            <div className="rounded-lg h-2 bg-white w-[75%]"></div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 mt-6 mb-4 items-center">
            <p className="font-[800] text-[24px]">Enter Details</p>
            <p className="text-[#FF616D] text-sm text-center">
              *Do not share this code with other than requested user
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center mt-8">
            <p className="text-[12px] text-[#C5C6CC]">Sharing Code</p>
            <p className="font-[800] text-2xl">665566</p>
          </div>
          <p className="text-[#C5C6CC] text-[14px] px-2 text-center mt-8">
            Clicking on send mail, It will generate a 4 digit code which
            requested candidate has to fill.
          </p>
        </div>
      </div>
    </>
  );
}
