"use client"

import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Settings() {

    const router = useRouter();
    const toLinkedAccounts = () => {
        router.push('/settings/linked-accounts');
    };

    const toNotifications = () => {
        router.push('/settings/notification');
    };

    const toHelpCenter = () => {
        router.push('/settings/help-center');
    };
    
  return (
    <>
      <div className="px-4 py-3">
        <div className="flex gap-2 items-center text-lg">
          <IoIosArrowBack className="text-[25px]" />
          <p>Settings</p>
        </div>

        <div className="mx-3 mb-4 mt-8 flex flex-col gap-6">
            <p className="text-base font-bold">Account</p>
            <div className="flex gap-3 cursor-pointer" onClick={toLinkedAccounts}>
                <Image src={require('../../public/images/link.svg')}/>
                <p className="text-[#F8F9FE]">Linked Accounts</p>
            </div>
        </div>

        <hr className="border border-[#35383F] my-3" />

        <div className="mx-3 my-4 flex flex-col gap-6">
            <p className="text-base font-bold">General</p>
            <div className="flex gap-3 cursor-pointer">
                <Image src={require('../../public/images/Profile.svg')}/>
                <p className="text-[#F8F9FE]">Account manager details</p>
            </div>
            <div className="flex gap-3 cursor-pointer" onClick={toNotifications}>
                <Image src={require('../../public/images/notification.svg')}/>
                <p className="text-[#F8F9FE]">Notifications</p>
            </div>
            <div className="flex gap-3 cursor-pointer">
                <Image src={require('../../public/images/mic.svg')}/>
                <p className="text-[#F8F9FE]">Language (English (US))</p>
            </div>
            <div className="flex gap-3 cursor-pointer" onClick={toHelpCenter}>
                <Image src={require('../../public/images/help.svg')}/>
                <p className="text-[#F8F9FE]">Help Center / Contact Us</p>
            </div>
            <div className="flex gap-3 cursor-pointer">
                <Image src={require('../../public/images/add-invite.svg')}/>
                <p className="text-[#F8F9FE]">Invite Friends</p>
            </div>
        </div>

        <hr className="border border-[#35383F] my-3" />

        <div className="mx-3 my-4 flex flex-col gap-6">
            <p className="text-base font-bold">About</p>
            <div className="flex gap-3">
                <Image src={require('../../public/images/eye.svg')}/>
                <p className="text-[#F8F9FE]">Privacy & Policy</p>
            </div>
            <div className="flex gap-3">
                <Image src={require('../../public/images/Paper.svg')}/>
                <p className="text-[#F8F9FE]">Terms of Services</p>
            </div>
            <div className="flex gap-3">
                <Image src={require('../../public/images/help.svg')}/>
                <p className="text-[#F8F9FE]">About Us</p>
            </div>
        </div>

        <hr className="border border-[#35383F] my-3" />
        
        <div className="mx-3 mt-4 mb-24 flex flex-col gap-6">
            <div className="flex gap-3">
                <Image src={require('../../public/images/delete-acc.svg')}/>
                <p className="text-[#FF616D]">Delete My Account</p>
            </div>
            <div className="flex gap-3">
                <Image src={require('../../public/images/logout.svg')}/>
                <p className="text-[#FF616D]">Logout</p>
            </div>
        </div>
      </div>
    </>
  );
}
