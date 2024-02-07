export default function layout({ children }) {
  return (
    <>
      <div className="px-4 py-7">
        <div>
          <p className="text-xs font-[300]">User: Dave Dus</p>
          <p className="text-[18px] font-[300]">Owner: davedus@google</p>
        </div>
        {children}
      </div>
    </>
  );
}
