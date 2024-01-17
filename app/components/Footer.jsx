export default function Footer() {
  return (
    <div className="fixed bottom-0 h-[200px] w-full bg-inherit text-white"> 
    {/* There is a need of replacing above classnames afterwards to undo the fixed nature of the footer */}
      <hr className="opacity-20" />
      <div className="text-[#8F9098] text-center mt-10">
        <p>Copyright © 2023 SeeYou</p>
        <p className="mt-5">All Rights Reserved | Terms and Conditions | Security | Billing | Privacy Policy| Contact</p>
      </div>
    </div>
  );
}
