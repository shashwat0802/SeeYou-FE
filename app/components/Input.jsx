const Input = ({ id, type, placeholder, label, required, left }) => {
  return (
    <div className="group w-full md:w-80 lg:w-96">
      <label
        htmlFor={id}
        className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out text-white my-2"
      >
        {label}
        {required && label && <span className="text-[#FF616D]">*</span>}
      </label>
      <div className="relative flex items-center custom-input">
        <input
          id={id}
          type={type}
          name={id}
          placeholder={placeholder}
          className="peer relative h-10 w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white placeholder:text-sm rounded-xl py-6 focus:border-white font-bold"
          required={required}
          autoComplete=""
        />
        {/* Fixed the alignment of asterik to come on level with placeholder */}
        {required && !label && (
          <span
            className="asterisk"
            style={{
              position: 'absolute',
              left: `${left}px`,
              top: '14px',
              color: '#FF616D',
            }}
          >
            *
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
