import React from 'react';
import Image from 'next/image';

export default function Custom500() {
  return (
    <div className="h-screen bg-orange-400 flex flex-col items-center justify-center text-white">
      <h2 className="font-semibold text-2xl">
        Hmm...Something got wrong somewhere...
      </h2>
      <Image
        src="/disconnected.png"
        alt="serverside error"
        width={300}
        height={300}
      />

      <div
        onClick={() => window.history.back()}
        className="hover:text-orange-800 font-semibold cursor-pointer"
      >
        Click here to take a step back
      </div>
    </div>
  );
}
