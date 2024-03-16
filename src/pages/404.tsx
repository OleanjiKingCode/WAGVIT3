import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="h-screen bg-red-600 flex flex-col items-center justify-center text-white">
      <h2 className=" font-semibold text-2xl">Seems like someone got lost</h2>
      <Image
        src="/pageNotFound.png"
        alt="pageNotFoundError"
        width={300}
        height={300}
      />

      <Link href="/">
        <span className="hover:text-black">
          Let&apos;s get you somewhere safe, Click here.
        </span>
      </Link>
    </div>
  );
}
