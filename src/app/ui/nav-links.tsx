"use client";

import {
  MusicalNoteIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const links = [
  { name: 'Music Library', href: '/library', icon: MusicalNoteIcon },
  { name: 'Audio Equalizer', href: '/equalizer', icon: AdjustmentsVerticalIcon },
  { name: 'Search', href: '/search', icon: MagnifyingGlassIcon },
  { name: 'My Profile', href: '/profile', icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul
      className="w-full h-full md:h-fit flex items-center justify-around md:block transition-all"
    >
      {links.map(link => {
        const LinkIcon = link.icon;
        return (
          <li
            key={link.href.slice(1)}
            className="md:w-[25.75vmax] lg:w-[25.75vh] list-none"
          >
            <Link
              href={link.href}
              className={clsx(
                'flex items-center justify-center md:justify-start text-sm md:hover:bg-indigo-800 md:hover:dark:bg-indigo-400 hover:text-black hover:dark:text-white md:hover:text-white md:hover:dark:text-black transition-all',
                {
                  'text-black dark:text-white': pathname === link.href,
                  'text-zinc-500 dark:text-slate-500': pathname !== link.href,
                },
              )}
            >
              <LinkIcon className={clsx(
                'p-[3.5vmax] md:p-[2.25vmax] lg:p-[2.25vh] w-[10vmax] md:w-[7.5vmax] lg:w-[7.5vh] md:border-x-4 md:border-x-transparent transition-all',
                {
                  'md:border-l-indigo-800 md:dark:border-l-indigo-400': pathname === link.href,
                },
              )} />
              <p className="hidden md:block transition-all">
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
