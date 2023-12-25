import Link from 'next/link';
import Image from 'next/image';
import { pattaya } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/solid';

export default function SideNav() {
  return (
    <header
      className="w-full md:w-[7.5vmax] md:hover:w-[25.75vmax] lg:w-[7.5vh] lg:hover:w-[25.75vh] h-[10vmax] md:h-full absolute left-0 bottom-0 bg-slate-100 dark:bg-black md:shadow-md md:shadow-zinc-700 dark:md:shadow-slate-700 overflow-hidden transition-all"
    >
      <Link
        href="/"
        className="w-[25.75vmax] lg:w-[25.75vh] h-[7.5vmax] lg:h-[7.5vh] hidden md:flex items-center text-2xl text-black dark:text-white"
      >
        <Image
          className="p-[1.25vmax] lg:p-[1.25vh] w-[7.5vmax] lg:w-[7.5vh] dark:invert"
          src="/virtune-logo.png"
          alt="Virtune logo"
          width={128}
          height={128}
          priority
        />
        <p className={`${pattaya.className}`}>Virtune</p>
      </Link>
      <NavLinks />
      <form className="hidden md:block absolute left-0 bottom-0">
        <button
          className="w-[25.75vmax] lg:w-[25.75vh] flex items-center text-sm text-zinc-500 dark:text-slate-500 hover:text-white dark:hover:text-black hover:bg-indigo-800 hover:dark:bg-indigo-400 transition-all"
        >
          <PowerIcon
            className="p-[2.25vmax] lg:p-[2.25vh] w-[7.5vmax] lg:w-[7.5vh] border-x-4 border-x-transparent transition-all"
          />
          <p className="transition-all">Log In</p>
        </button>
      </form>
    </header>
  );
}
