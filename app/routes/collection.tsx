import { useLoaderData } from "@remix-run/react";
import { ethers } from "ethers";

export function headers() {
  return { accept: "application / json" };
}

export async function loader() {
  const res = await fetch(
    "https://shy-distinguished-sound.ethereum-goerli.discover.quiknode.pro/9ca1d4f0d64363db20e3c5fea0c674d9be345879/eth/v1/beacon/blocks/head/attestations"
  );
  return res;
}

export default function Collection() {
  const { data } = useLoaderData();

  console.log(data);
  return (
    <div className="font-sans leading-6 h-screen">
      <header>
        <nav className="flex flex-row justify-center">
          <h1 className="text-3xl font-bold underline">
            Testing Querying Quicknode
          </h1>
        </nav>
      </header>
      <div className="flex flex-col border-solid border-2 m-16 py-8 self-stretch">
        <div className="flex flex-row justify-start mx-12 border-solid border-2">
          {/* {collections.map((collection) => (
            <ResultsPane key={collection.id} data={collection} />
          ))} */}
        </div>
        <div className="flex flex-row justify-start my-6 mx-12 border-solid border-2">
          {/* {executionStrategies.map((strategy) => (
            <ResultsPane key={strategy.id} data={strategy} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
