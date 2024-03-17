import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { Button } from './ui/Button';
import { Variant } from '@/types/tagsTypes';
import { Tag } from './ui/Tag';
import Card from './ui/Card';

export const Showcase = () => {
  return (
    <div className=" min-h-screen w-full bg-pink-100 flex flex-col items-center py-10 gap-5">
      <h2 className="text-xl font-medium">Ready Made Components</h2>
      <ConnectButton />

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
              <img
                src="path/to/image.png"
                alt="NFT Image"
                className="w-full h-auto mb-4"
              />
              <div className="flex justify-between items-center">
                <strong>Milady Maker</strong>
                <Tag text="@rare" isDefault variant={Variant.Success} />
              </div>
              <div>
                This is a custom NFT card featuring a unique digital asset.
              </div>
            </div>
          }
          footer={
            <div className="flex w-full gap-5 justify-between flex-wrap ">
              <Button text="BUY" isDefault variant={Variant.Primary} />
              <Button text="SELL" isDefault variant={Variant.Secondary} />
            </div>
          }
        />
      </div>
    </div>
  );
};
