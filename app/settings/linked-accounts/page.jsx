"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function LinkedAccounts() {
  const router = useRouter();
  const goBack = () => {
    router.push("/settings");
  };

  const [linkedintoggle, setLinkedinToggle] = useState(true);
  const [googleToggle, setGoogleToggle] = useState(true);
  const [facebookToggle, setFacebookToggle] = useState(true);
  const [appleToggle, setAppleToggle] = useState(false);

  return (
    <div className="px-4 py-3 min-h-[80vh]">
      <div className="flex gap-2 items-center text-lg">
        <IoIosArrowBack onClick={goBack} className="text-[25px]" />
        <p>Linked Accounts</p>
      </div>

      <div className="mx-3 my-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 cursor-pointer">
            <Image src={require("../../../public/images/linkedIn.svg")} />
            <p className="text-[#F8F9FE]">Linkedin</p>
          </div>
          <div onClick={() => setLinkedinToggle(!linkedintoggle)}>
            {linkedintoggle ? (
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
            <Image src={require("../../../public/images/google.svg")} />
            <p className="text-[#F8F9FE]">Google</p>
          </div>
          <div onClick={() => setGoogleToggle(!googleToggle)}>
            {googleToggle ? (
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
            <Image src={require("../../../public/images/facebook.svg")} />
            <p className="text-[#F8F9FE]">Facebook</p>
          </div>
          <div onClick={() => setFacebookToggle(!facebookToggle)}>
            {facebookToggle ? (
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
            <Image src={require("../../../public/images/apple.svg")} />
            <p className="text-[#F8F9FE]">Apple</p>
          </div>
          <div onClick={() => setAppleToggle(!appleToggle)}>
            {appleToggle ? (
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
      </div>
    </div>
  );
}
