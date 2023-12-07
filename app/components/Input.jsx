const Input = ({ id, type, placeholder, label }) => {
  return (
    <div className="group w-72 md:w-80 lg:w-96">
      <label
        htmlFor={id}
        className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          type={type}
          name={id}
          placeholder={placeholder}
          className="peer relative h-10 w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white font-bold"
        />
        {/* <button className="absolute right-2 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
          Send
        </button> */}
      </div>
    </div>
  );
};

export default Input;
