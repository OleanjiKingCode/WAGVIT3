import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Variant } from '@/types/tagsTypes';
import { RiEye2Line, RiGithubFill } from 'react-icons/ri';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col px-10 md:px-20 gap-10 py-10 md:py-0 justify-center bg-[#0f172a] text-white">
      <div className="flex flex-col">
        <h2 className="font-bold text-lg md:text-5xl">WAGVIT3</h2>
        <h2 className="text-sm md:text-base text-gray-500 font-bold">
          WAGMI + VIEM + TAILWIND + WEB3
        </h2>
      </div>

      <span className="text-base">
        This project serves as a template for Web3 projects, providing a
        foundation for building decentralized applications using various
        libraries and tools. It includes a collection of reusable UI components
        and demonstrates implemented functionalities using the Wagmi library.
      </span>
      <div className="flex flex-wrap gap-5 items-center">
        <Tag text="NEXT JS" isDefault variant={Variant.Primary} />
        <Tag text="TYPESCRIPT" isDefault variant={Variant.Secondary} />
        <Tag text="WAGMI" isDefault variant={Variant.Success} />
        <Tag text="TAILWIND CSS" isDefault variant={Variant.Warning} />
        <Tag text="VIEM" isDefault variant={Variant.Success} />
        <Tag text="ETHERS" isDefault variant={Variant.Danger} />
      </div>
      <div className="flex flex-wrap gap-5 items-center">
        <Button
          text="View Components"
          isDefault
          icon={<RiEye2Line />}
          className="bg-emerald-400 hover:bg-emerald-700 bg-"
        />
        <Button text="Contribute" isDefault icon={<RiGithubFill />} />
      </div>
    </div>
  );
}
