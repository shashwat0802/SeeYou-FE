"use client";

import Image from "next/image";

const listPoints = [
  {
    id: 1,
    data: "Programming languages: Python, Java, C++, JavaScript",
  },
  {
    id: 2,
    data: "Web development frameworks: Django, Spring Boot, React",
  },
  {
    id: 3,
    data: "Cloud computing platforms: AWS, Azure, GCP",
  },
  {
    id: 4,
    data: "Databases: MySQL, PostgreSQL, MongoDB",
  },
  {
    id: 5,
    data: "Agile development methodologies: Scrum, Kanban",
  },
  {
    id: 6,
    data: "Software testing tools: JUnit, Selenium, Postman",
  },
  {
    id: 7,
    data: "Communication and collaboration tools: Slack, Jira, Confluence",
  },
];

const skillsData = [
  {
    id: 1,
    data: "Problem solving",
  },
  {
    id: 2,
    data: "Critical thinking",
  },
  {
    id: 3,
    data: "Creativity",
  },
  {
    id: 4,
    data: "Teamwork",
  },
  {
    id: 5,
    data: "Communication",
  },
  {
    id: 6,
    data: "Leadership",
  },
];

export default function CompanyDetails() {
  return (
    <div className="min-h-[70vh] px-5 pt-6 pb-12">
      <p className="font-bold text-2xl">Company Details</p>
      <div className="flex items-center gap-2 pt-3">
        <Image src={require("../../public/images/Iconly.svg")} />
        <p className="font-bold">Company Logo</p>
      </div>

      <hr className="border border-[#35383F] my-3" />

      <div className="mb-6">
        <div className="flex gap-2 items-center">
          <Image src={require("../../public/images/Paper.svg")} />
          <p className="font-bold">Company Legal Information</p>
        </div>
        <div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">Official Name</p>
            <input
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
              type="text"
              placeholder="Google"
            />
            <Image
              src={require("../../public/images/Icon.svg")}
              className="absolute right-8 -translate-y-9 w-6 h-6"
            />
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">Registration Number</p>
            <input
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
              type="text"
              placeholder="LPXV 9112484YM"
            />
            <Image
              src={require("../../public/images/Icon.svg")}
              className="absolute right-8 -translate-y-9 w-6 h-6"
            />
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">VAT number (EU)</p>
            <input
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
              type="text"
              placeholder="BWJPV 81233N"
            />
            <Image
              src={require("../../public/images/Icon.svg")}
              className="absolute right-8 -translate-y-9 w-6 h-6"
            />
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">Industry</p>
            <select
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC] text-[#8F9098]"
              id="dropdown"
              name="fruit"
            >
              <option value="apple">IT Technology & Consultancy</option>
              <option value="banana">option 02</option>
              <option value="orange">option 03</option>
              <option value="grape">option 04</option>
            </select>
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">Total number of employees</p>
            <select
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC] text-[#8F9098]"
              id="dropdown"
              name="fruit"
            >
              <option value="apple">More than 1000</option>
              <option value="banana">option 02</option>
              <option value="orange">option 03</option>
              <option value="grape">option 04</option>
            </select>
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">
              Company website<span className="text-red-500">*</span>
            </p>
            <input
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
              type="text"
              placeholder="www.google.com"
            />
          </div>
        </div>
      </div>

      <hr className="border border-[#35383F] my-3" />

      <div className="mb-6">
        <div className="flex gap-2 items-center">
          <Image src={require("../../public/images/location.svg")} />
          <p className="font-bold">Company Local Information</p>
        </div>
        <div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">City</p>
            <select
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC] text-[#8F9098]"
              id="dropdown"
              name="fruit"
            >
              <option value="apple">Surat</option>
              <option value="banana">option 02</option>
              <option value="orange">option 03</option>
              <option value="grape">option 04</option>
            </select>
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">County/region/state</p>
            <select
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC] text-[#8F9098]"
              id="dropdown"
              name="fruit"
            >
              <option value="apple">Gujarat</option>
              <option value="banana">option 02</option>
              <option value="orange">option 03</option>
              <option value="grape">option 04</option>
            </select>
          </div>
          <div className="pt-5">
            <p className="text-sm pb-2 font-bold">County</p>
            <select
              className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC] text-[#8F9098]"
              id="dropdown"
              name="fruit"
            >
              <option value="apple">India</option>
              <option value="banana">option 02</option>
              <option value="orange">option 03</option>
              <option value="grape">option 04</option>
            </select>
          </div>
        </div>
      </div>

      <hr className="border border-[#35383F] my-3" />

      <div className="mb-6">
        <div className="flex gap-2 items-center">
          <Image src={require("../../public/images/group.svg")} />
          <p className="font-bold">About Company</p>
        </div>
        <div className="my-5 outline ouline-[#35383F] p-3 rounded-xl">
          <ul className="list-disc px-4">
            {listPoints.map((items) => (
              <li key={items.data}>{items.data}</li>
            ))}
          </ul>
          <p className="pt-2">
            In addition to the above, John Doe could also list the following
            skills in his profile:
          </p>
          <ul className="list-disc px-4">
            {skillsData.map((items) => (
              <li key={items.data}>{items.data}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-sm">
          Company Presentation{" "}
          <span className="text-[#3AC0A0]">
            Company Presentation (optional but recommended)
          </span>
        </p>
        <div className="bg-[#1F222A] w-full h-[130px] my-3 py-2 rounded-2xl outline-white outline-dotted">
          <div
            className="p-2 flex gap-3 items-center"
            style={{ borderSpacing: "0.5px" }}
          >
            <Image src={require("../../public/images/PDF.svg")} />
            <div>
              <p>GothaCapital.PPT</p>
              <p className="text-[#B5B6B7]">
                <span>867 Kb</span> . <span>14 Feb 2022 at 11:30 am</span>
              </p>
            </div>
          </div>
          <div className="p-3 flex gap-3 items-center">
            <Image src={require("../../public/images/Delete.svg")} />
            <p className="text-[#FC4646]">Remove File</p>
          </div>
        </div>
        <p className="text-[#AAA6B9] text-sm">
          Upload files in PPT/PDF format up to 10 MB.
        </p>
      </div>

      <hr className="border border-[#35383F] my-3" />

      <div>
        <div className="flex gap-3 items-center my-2">
          <Image src={require("../../public/images/Paper Plus.svg")} />
          <p className="text-[18px] font-[900]">Brands of company</p>
        </div>
        <div className="bg-[#1F222A] h-[216px] rounded-2xl outline-white outline-dotted my-4 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image src={require("../../public/images/Add.svg")} />
            <div className="flex flex-col items-center">
              <p>Upload your brand logo</p>
              <p>(Max 10 MB)</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#35383F] my-3" />

      <div>
        <div className="flex gap-3 items-center my-2">
          <Image src={require("../../public/images/Play.svg")} />
          <p className="text-lg font-[900]">Uploaded Company Video</p>
        </div>
        <div className="my-4">
          <p className="underline">See Demo & Tips</p>
          <div>{/* missing */}</div>
          <p className="text-sm text-[#C5C6CC] text-center">OR</p>
          <div className="bg-[#1F222A] h-[80px] my-3 rounded-2xl outline outline-[#35383F] flex gap-3 items-center justify-between px-3">
            <div>
              <p className="text-lg">Shoot using Camera</p>
              <p className="text-[#C5C6CC]">
                Capture realtime video of your video
              </p>
            </div>
            <Image
              className="w-4 h-4"
              src={require("../../public/images/Camera.svg")}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 my-4 pt-4">
        <button className="bg-inherit text-white text-[14px] outline outline-white font-semibold px-4 py-3 w-full rounded-lg">
          Cancel
        </button>
        <button className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg">
          Save Changes
        </button>
      </div>
      
    </div>
  );
}
