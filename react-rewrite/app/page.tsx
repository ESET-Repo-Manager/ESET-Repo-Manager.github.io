import Image from "next/image";
import { RoundedH1 } from "@/components/RoundedH1";

export default function Home() {
  return (
    <main className="bg-eset-main flex flex-col items-center p-5 text-white sm:p-10">
      <RoundedH1>
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>{" "}
        SEASON 01 — ETHER
      </RoundedH1>
      <p className="">Harnessing the sun. Racing to shine.</p>
    </main>
  );
}
