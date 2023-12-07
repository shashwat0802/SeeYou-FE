import Image from 'next/image';
import Link from 'next/link';
import logoPath from '@/public/images/logo.svg';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '700'] });

export const metadata = {
  title: 'SeeYou',
  description: '',
};

const HomePage = () => {
  return (
    <div className="place-items-center grid h-screen">
      <div>
        {/* <div className={'image-container'}>
          <Image src={logoPath} fill="true" className={'image'} alt="" />
        </div> */}
        <Image src={logoPath} height={90} width={90} />
        <p
          className={`${roboto.className} text-2xl font-light text-center my-4 md:mb-20`}
        >
          <span className="font-bold">See</span>You
        </p>
        <div className="flex justify-center">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
