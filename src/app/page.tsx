import Image from 'next/image';
import { pattaya } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center text-center md:text-left">
      <h1 className={`${pattaya.className} mb-10 lg:mb-12 text-2xl lg:text-4xl`}>
        Virtune
      </h1>
      <p className="mb-8 lg:mb-10 text-4xl lg:text-6xl font-black">
        Tune in to Your Musical Virtues
      </p>
      <p className="mb-8 lg:mb-10 lg:w-3/5 text-xl lg:text-2xl">
        A prototype of an online music player, Virtune currently uses the NCS music library to create playlists.
      </p>
      <form className="w-full">
        <button
          className="w-full md:w-fit px-[4vmax] py-[2vmax] md:px-[3vmax] md:py-[1.5vmax] lg:px-[3vh] lg:py-[1.5vh] text-base text-white dark:text-black bg-indigo-800 dark:bg-indigo-400 hover:text-indigo-800 hover:dark:text-indigo-400 hover:bg-white hover:dark:bg-black rounded-full transition-all"
        >
          Sign Up
        </button>
      </form>
      <div className="w-full h-full absolute inset-0 -z-50">
        <Image
          className="hidden md:block object-cover"
          src="/hero-desktop.png"
          fill
          alt="An image of abstract circles."
          quality={100}
          sizes="100vw"
          priority
        />
        <Image
          className="block md:hidden object-cover"
          src="/hero-mobile.png"
          fill
          alt="An image of abstract circles."
          quality={100}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
