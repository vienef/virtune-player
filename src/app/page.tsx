import Image from 'next/image';
import { pattaya } from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className="p-6 lg:p-28 h-screen flex flex-col justify-center">
      <h1 className={`${pattaya.className} mb-12 text-4xl text-center lg:text-left`}>
        Virtune
      </h1>
      <p className="mb-10 text-6xl font-black">Tune in to Your Musical Virtues</p>
      <p className="mb-10 lg:w-3/5 text-2xl">
        A prototype of an online music player, Virtune currently uses the NCS music library to create playlists.
      </p>
      <a href="/">Log in</a>
      <div className="w-full h-full absolute inset-0 -z-50">
        <Image
          className="hidden md:block object-cover"
          src="/hero-desktop.png"
          fill
          alt="An image of triangles, lines, and circles."
          quality={100}
          sizes="100vw"
          priority
        />
        <Image
          className="block md:hidden object-cover"
          src="/hero-mobile.png"
          fill
          alt="An image triangles, lines, and circles."
          quality={100}
          sizes="100vw"
          priority
        />
      </div>
    </main>
  );
}
