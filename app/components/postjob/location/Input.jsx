import React from "react";

const Input = ({ id, type, value , changeHandler , placeholder, label, required, left }) => {
    return (
      <div className="group w-full md:w-80 lg:w-96">
        <label
          htmlFor={id}
          className="inline-block w-full text-sm font-medium transition-all duration-200 ease-in-out text-white-medium my-2 empty:hidden"
        >
          {label}
          {required && label && <span className="text-[#FF616D]">*</span>}
        </label>
        <main className="relative flex items-center custom-input">
          <input
            id={id}
            value={value}
            type={type}
            name={id}
            placeholder={placeholder}
            className="peer relative h-10 w-full bg-transparent border-[#C5C6CC] border pl-4 pr-20  outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-sm rounded-xl py-6 focus:border-white "
            required={required}
            autoComplete=""
            onChange={(e)=>changeHandler( id ,e.target.value)}
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
        </main>
      </div>
    );
  };
  
  export default Input;
  