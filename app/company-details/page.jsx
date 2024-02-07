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
        data: 'Problem solving'
    },
    {
        id: 2,
        data: 'Critical thinking'
    },
    {
        id: 3,
        data: 'Creativity'
    },
    {
        id: 4,
        data: 'Teamwork'
    },
    {
        id: 5,
        data: 'Communication'
    },
    {
        id: 6,
        data: 'Leadership'
    },
]

export default function CompanyDetails() {
  return (
    <div className="min-h-[70vh] px-5 py-6">
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
          <p>In addition to the above, John Doe could also list the following skills in his profile:</p>
          <ul className="list-disc px-4">
            {skillsData.map((items) => (
              <li key={items.data}>{items.data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
