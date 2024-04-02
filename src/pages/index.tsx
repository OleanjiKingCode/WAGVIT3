import Tag from '@/components/ui/Tag';
import { Variant } from '@/types/tagsTypes';
import { Inter } from 'next/font/google';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col px-10 md:px-20 gap-10 justify-center bg-[#0f172a] text-white">
      <h2 className="font-bold text-lg md:text-5xl">WAGVIT3</h2>
      <h2 className="text-sm md:text-base text-gray-500 font-semibold">
        (WAGMI+VIEM+TAILWIND+WEB3)
      </h2>
      <span className="text-base">
        This project serves as a template for Web3 projects, providing a
        foundation for building decentralized applications using various
        libraries and tools. It includes a collection of reusable UI components
        and demonstrates implemented functionalities using the Wagmi library.
      </span>
      <div className="flex gap-5 items-center">
        <Tag text="NEXT JS" isDefault variant={Variant.Success} />
        <Tag text="WAGMI" isDefault variant={Variant.Primary} />
        <Tag text="TAILWIND CSS" isDefault variant={Variant.Warning} />
        <Tag text="VIEM" isDefault variant={Variant.Success} />
        <Tag text="ETHERS" isDefault variant={Variant.Danger} />
      </div>
    </div>
  );
}
