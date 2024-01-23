"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { GoPlus } from "react-icons/go";

const dataApproved = ["USER", "STATUS", "ROLE", "ACTION"];
const dataRequested = ["USER", "STATUS", "ACTION"];

export default function AccManager() {
  const router = useRouter();

  const [active, setActive] = useState("approved");

  const addUser = () => {
    router.push("/account-manager/add-user");
  };

  return (
    <>
      <div className="px-4 py-7">
        <div>
          <p className="text-xs font-[300]">User: Dave Dus</p>
          <p className="text-[18px] font-[300]">Owner: davedus@google</p>
        </div>

        <div className="flex mt-10 w-full justify-center">
          <div
            onClick={() => {
              setActive("approved");
            }}
            className="flex-1"
          >
            <p
              className={`text-center pb-2 ${
                active !== "approved" && "opacity-50"
              }`}
            >
              Approved (1)
            </p>
            <hr
              className={`text-white ${
                active !== "approved"
                  ? "opacity-50"
                  : "border-2 border-solid rounded-xl"
              }`}
            />
          </div>
          <div
            onClick={() => {
              setActive("requested");
            }}
            className="flex-1"
          >
            <p
              className={`text-center pb-2 ${
                active !== "requested" && "opacity-50"
              }`}
            >
              Requested (1)
            </p>
            <hr
              className={`text-white ${
                active !== "requested"
                  ? "opacity-50"
                  : "border-2 border-solid rounded-xl"
              }`}
            />
          </div>
        </div>

        {active === "approved" && (
          <table
            className="outline outline-[#35383f] rounded-lg mt-5 border-collapse w-full"
            style={{ paddingLeft: "20px" }}
          >
            <colgroup>
              {dataApproved.map((_, index) => (
                <col key={index} style={{ width: "25%" }} />
              ))}
            </colgroup>
            <tr>
              <td className="h-[40px] flex items-center text-[14px] pl-2">
                User
              </td>
            </tr>
            <tr className="h-[40px] bg-[#1f222a]">
              {dataApproved.map((items, index) => (
                <td
                  className={`border-none text-[14px] ${
                    index === 0 ? "pl-2" : ""
                  }`}
                  key={items}
                >
                  {items}
                </td>
              ))}
            </tr>
            <tr className="h-[40px]">
              <td className="border-none text-[14px] pl-2">davedus..</td>
              <td className="border-none text-[14px]">Active</td>
              <td className="border-none text-[14px]">Admin</td>
              <td className="border-none text-[14px] underline">
                <a href="#">See Details</a>
              </td>
            </tr>
          </table>
        )}

        {active === "requested" && (
          <table
            className="outline outline-[#35383f] rounded-lg mt-5 border-collapse w-full"
            style={{ paddingLeft: "20px" }}
          >
            <colgroup>
              {dataRequested.map((_, index) => (
                <col key={index} style={{ width: "25%" }} />
              ))}
            </colgroup>
            <tr>
              <td className="h-[40px] flex items-center text-[14px] pl-2">
                User
              </td>
            </tr>
            <tr className="h-[40px] bg-[#1f222a]">
              {dataRequested.map((items, index) => (
                <td
                  className={`border-none text-[14px] ${
                    index === 0 ? "pl-2" : ""
                  }`}
                  key={items}
                >
                  {items}
                </td>
              ))}
            </tr>
            <tr className="h-[40px]">
              <td className="border-none text-[14px] pl-2">rusho@gmail..</td>
              <td className="border-none text-[14px]">
                <Link href={""} className="text-[#2897FF]">
                  Requested
                </Link>
              </td>
              <td className="border-none text-[14px]">
                <div className="flex items-center gap-2">
                  <p className="underline text-[#3AC0A0]">Accept</p>
                  <p className="underline text-[#FF616D]">Reject</p>
                </div>
              </td>
            </tr>
          </table>
        )}

        <button onClick={addUser} className="w-full h-[48px] outline ouline-white rounded-xl flex justify-center items-center mt-7">
          <div className="flex gap-2 items-center">
            <GoPlus className="text-xl" />
            <p className="text-[14px] font-semibold">Add User</p>
          </div>
        </button>
      </div>
    </>
  );
}
