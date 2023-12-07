import Image from 'next/image';

const SignIn = () => {
  return (
    <div className="container mx-auto">
      <div className="grid place-items-center">
        <Image src={''} height={90} width={90} alt="" />
        <p className="font-black text-2xl">Welcome!</p>
        <form action=""></form>
      </div>
      <div class="group w-72 md:w-80 lg:w-96">
        <label
          for="10"
          class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          Outline button inline contained suffix
        </label>
        <div class="relative flex items-center">
          <input
            id="10"
            type="text"
            class="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
          />
          <button class="absolute right-2 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
