import Image from "next/image";
import { RoundedH1 } from "@/components/RoundedH1";

export default function Home() {
  return (
    <main className="flex flex-col bg-eset-main text-white p-5 sm:p-10 items-center">
      <RoundedH1>
        <span className="bg-white rounded-full w-1.5 h-1.5 mr-2 animate-pulse inline-block"></span>{" "}
        SEASON 01 — ETHER
      </RoundedH1>
      <p className="">Harnessing the sun. Racing to shine.</p>
    </main>
  );
}
