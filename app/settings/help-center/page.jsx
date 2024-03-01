"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        ques: "What is SeeYou?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur numquam nobis sed sapiente iusto nulla at repellat provident repellendus excepturi libero odio maiores, voluptatum nisi ipsam quo earum harum dolores?",
    },
    {
        ques: "What is SeeYou?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur numquam nobis sed sapiente iusto nulla at repellat provident repellendus excepturi libero odio maiores, voluptatum nisi ipsam quo earum harum dolores?",
    },
    {
        ques: "What is SeeYou?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur numquam nobis sed sapiente iusto nulla at repellat provident repellendus excepturi libero odio maiores, voluptatum nisi ipsam quo earum harum dolores?",
    },
    {
        ques: "What is SeeYou?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur numquam nobis sed sapiente iusto nulla at repellat provident repellendus excepturi libero odio maiores, voluptatum nisi ipsam quo earum harum dolores?",
    },
];

export default function helpCenter() {
  const [active, setActive] = useState("faq");
  const [show, setShow] = useState(false);

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

      <div className="flex mt-10 w-full justify-center">
        <div
          onClick={() => {
            setActive("faq");
          }}
          className="flex-1"
        >
          <p className={`text-center pb-2 ${active !== "faq" && "opacity-50"}`}>
            FAQ's
          </p>
          <hr
            className={`text-white ${
              active !== "faq"
                ? "opacity-50"
                : "border-2 border-solid rounded-xl"
            }`}
          />
        </div>
        <div
          onClick={() => {
            setActive("contactUs");
          }}
          className="flex-1"
        >
          <p
            className={`text-center pb-2 ${
              active !== "contactUs" && "opacity-50"
            }`}
          >
            Contact Us
          </p>
          <hr
            className={`text-white ${
              active !== "contactUs"
                ? "opacity-50"
                : "border-2 border-solid rounded-xl"
            }`}
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col gap-3">
        {faqData.map((data, index) => (
            <div
            key={index}
            onClick={() => setShow(!show)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-2 outline outline-[#35383F] rounded-2xl cursor-pointer"
            >
            <div>
                <p>{data?.ques}</p>
                {show && (
                <p className="text-xs text-[#71727A] mt-1">
                   {data?.ans}
                </p>
                )}
            </div>
            {show ? (
                <FaChevronUp className="text-gray-500" />
            ) : (
                <FaChevronDown className="text-gray-500" />
            )}
            </div>
        ))}
      </div>
    </div>
  );
}
