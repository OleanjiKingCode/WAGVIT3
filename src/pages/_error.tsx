import Image from 'next/image';
import React from 'react';

export default function CustomError() {
  return (
    <div className="h-screen bg-red-400 flex justify-center">
      <h2 className=" font-semibold text-2xl">An error occurred</h2>
      <Image
        src="/disconnected.png"
        alt="Error Page"
        width={300}
        height={300}
      />
    </div>
  );
}
