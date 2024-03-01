"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Notification() {
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(true);
  const [toggleThree, setToggleThree] = useState(true);
  const [toggleFour, setToggleFour] = useState(false);

  const router = useRouter();
  const goBack = () => {
    router.push("/settings");
  };

  return (
    <div className="px-4 py-3 min-h-[80vh]">
      <div className="flex gap-2 items-center text-lg">
        <IoIosArrowBack onClick={goBack} className="text-[25px]" />
        <p>Notifications</p>
      </div>

      <div className="mx-3 my-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#F8F9FE]">General Notifications</p>
          </div>
          <div onClick={() => setToggleOne(!toggleOne)}>
            {toggleOne ? (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggelOn.svg")}
              />
            ) : (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggleOff.svg")}
              />
            )}
          </div>
        </div>
        <hr className="border border-[#35383F]" />

        <div className="flex justify-between items-center">
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#F8F9FE] w-[80%]">
              Notify when someone applies to your job post{" "}
            </p>
          </div>
          <div onClick={() => setToggleTwo(!toggleTwo)}>
            {toggleTwo ? (
              <Image
                className="cursor-pointer w-[60px] h-[60px]"
                src={require("../../../public/images/toggelOn.svg")}
              />
            ) : (
              <Image
                className="cursor-pointer w-[60px] h-[60px]"
                src={require("../../../public/images/toggleOff.svg")}
              />
            )}
          </div>
        </div>
        <hr className="border border-[#35383F]" />

        <div className="flex justify-between items-center">
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#F8F9FE]">Alerts</p>
          </div>
          <div onClick={() => setToggleThree(!toggleThree)}>
            {toggleThree ? (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggelOn.svg")}
              />
            ) : (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggleOff.svg")}
              />
            )}
          </div>
        </div>
        <hr className="border border-[#35383F]" />

        <div className="flex justify-between items-center">
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#F8F9FE]">Updates</p>
          </div>
          <div onClick={() => setToggleFour(!toggleFour)}>
            {toggleFour ? (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggelOn.svg")}
              />
            ) : (
              <Image
                className="cursor-pointer"
                src={require("../../../public/images/toggleOff.svg")}
              />
            )}
          </div>
        </div>
        <hr className="border border-[#35383F]" />

        <div>
          <p className="text-lg mt-3">Message From SeeYou company</p>
          <p className="mt-3">
            This is message from CEO of SeeYou want to thank you for choosing
            SeeYou as your hiring platform.
          </p>
        </div>
      </div>
    </div>
  );
}
