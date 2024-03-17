import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { Button } from './ui/Button';
import { Variant } from '@/types/tagsTypes';
import { Tag } from './ui/Tag';
import Card from './ui/Card';
import Image from 'next/image';
import { Input } from './ui/Input';
import { useAccount, useSwitchChain } from 'wagmi';
import { shortenAddress } from '@/utils/shoternAddress';
// import Select, { Option } from './ui/Select';
import { SwitchChain } from '@/utils/switchNetwork';
import { toHex } from 'viem';

export const Showcase = () => {
  const { address, chain } = useAccount();
  const { chains } = useSwitchChain();
  const chainOptions = chains.map((el) => ({
    label: el.name,
    value: String(el.id),
  }));

  const switchChain = async (value: string) => {
    let currentChain =
      chains.find((entry) => entry.id === Number(value)) || chains[0];

    await SwitchChain({
      chainId: toHex(currentChain.id),
      chainName: currentChain?.name,
      rpcUrls: [...currentChain.rpcUrls.default.http],
    });
  };

  return (
    <div className=" min-h-screen w-full bg-pink-100 flex flex-col items-center py-10 gap-5">
      <h2 className="text-xl font-medium">Ready Made Components</h2>
      <ConnectButton />

      <div className="flex gap-1">
        Shorten User Address:{' '}
        <Tag
          text={shortenAddress(address)}
          isDefault
          variant={Variant.Primary}
        />
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-5 w-full justify-center px-5">
        <h2 className="text-xl font-medium">Switch Chain </h2>
        <select
          className=" bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 cursor-pointer w-fit"
          value={chain?.id}
          onChange={(e) => switchChain(e.target.value)}
        >
          {chainOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-medium mt-10">Tag Samples</h2>
      <div className="flex gap-5 justify-between px-5 flex-wrap ">
        <Tag text="Default Tag" isDefault />
        <Tag text="Success Tag" isDefault variant={Variant.Success} />
        <Tag text="Primary Tag" isDefault variant={Variant.Primary} />
        <Tag text="Secondary Tag" isDefault variant={Variant.Secondary} />
        <Tag text="Danger Tag" isDefault variant={Variant.Danger} />
        <Tag text="Warning Tag" isDefault variant={Variant.Warning} />
      </div>

      <h2 className="text-xl font-medium mt-10">Button Samples</h2>
      <div className="flex gap-5 justify-between px-5 flex-wrap ">
        <Button text="Default Button" isDefault />
        <Button text="Success Button" isDefault variant={Variant.Success} />
        <Button text="Primary Button" isDefault variant={Variant.Primary} />
        <Button text="Secondary Button" isDefault variant={Variant.Secondary} />
        <Button text="Danger Button" isDefault variant={Variant.Danger} />
        <Button text="Warning Button" isDefault variant={Variant.Warning} />
        <Button text="Loading Button" isDefault isLoading />
      </div>

      <h2 className="text-xl font-medium mt-10">Input Samples</h2>
      <div className="flex flex-row gap-5 justify-between px-5 flex-wrap ">
        <Input type="text" placeholder="This is a text" />
        <Input type="number" placeholder="300" />
      </div>

      <h2 className="text-xl font-medium mt-10">Card Samples</h2>
      <div className="flex gap-5 justify-between px-5 flex-wrap ">
        <Card
          headerText="Normal Card"
          body={<p>This is the body of my card.</p>}
          footer={<button type="button">Card Footer</button>}
        />
        <Card
          headerText="Normal Card without footer"
          body={<p>This is the body of my card.</p>}
        />

        <Card
          headerText="Nft Card"
          body={
            <div className="flex flex-col gap-2">
              <Image
                src="/boredape.jpg"
                alt="NFT Image"
                width={200}
                height={200}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <div className="flex justify-between items-center">
                <strong>Milady Maker</strong>
                <Tag text="123 ETH" isDefault variant={Variant.Secondary} />
              </div>
              <div>
                This is a custom NFT card featuring a unique <br /> digital
                asset.
              </div>
            </div>
          }
          footer={
            <div className="flex w-full gap-5 justify-between flex-wrap ">
              <Button text="BUY NFT" isDefault variant={Variant.Primary} />
              <Button text="SELL NFT" isDefault variant={Variant.Secondary} />
            </div>
          }
        />
      </div>
    </div>
  );
};
