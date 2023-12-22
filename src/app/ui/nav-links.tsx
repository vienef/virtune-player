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
                'flex items-center justify-center md:justify-start text-sm text-zinc-900 dark:text-slate-500 md:hover:bg-indigo-800 hover:text-black dark:hover:text-white transition-all',
                {
                  'text-black dark:text-white': pathname === link.href,
                },
              )}
            >
              <LinkIcon className={clsx(
                'p-[3.5vmax] md:p-[2.25vmax] lg:p-[2.25vh] w-[10vmax] md:w-[7.5vmax] lg:w-[7.5vh] md:border-x-4 md:border-x-transparent transition-all',
                {
                  'md:border-l-indigo-800': pathname === link.href,
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
