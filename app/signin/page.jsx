import Image from 'next/image';
import logoPath from '@/public/images/logo.svg';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
const SignIn = () => {
  return (
    <div className="container mx-auto">
      <div className="grid place-items-center h-screen">
        <div className="grid place-items-center">
          <Image src={logoPath} height={90} width={90} alt="" />
          <p className="font-black text-2xl">Welcome!</p>
          <form action="" className="">
            <Input type="email" id="email-id" placeholder="Email Address" />
            <PasswordInput
              type="password"
              id="password"
              placeholder="Password"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
