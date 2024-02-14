export default function Footer() {
  return (
    <div className=" h-[200px] w-full bg-inherit text-white"> 
    {/* There is a need of replacing above classnames afterwards to undo the fixed nature of the footer */}
    {/* I have made the footer not fixed, but can make the footer sticky as well */}
      <hr className="opacity-20" />
      <div className="text-[#8F9098] text-center mt-10">
        <p>Copyright © 2023 SeeYou</p>
        <p className="mt-5">All Rights Reserved | Terms and Conditions | Security | Billing | Privacy Policy| Contact</p>
      </div>
    </div>
  );
}
