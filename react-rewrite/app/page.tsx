"use client";
import Image from "next/image";
import { RoundedH1 } from "@/components/RoundedH1";
import { useState } from "react";
import showCase from "@/public/showCase.jpg";
import LI from "@/public/LIlogo.png";

const photoPaths = ["/showCase.jpg", "/logo.png", "/Instalogo.png"];
const photoPaths1 = [showCase, LI];
function BigP(props: { children: React.ReactNode }) {
  return (
    <p className="text-center text-3xl font-extrabold sm:text-6xl">
      {props.children}
    </p>
  );
}

export default function Home() {
  const [Index, setIndex] = useState(0);
  return (
    <main className="bg-eset-main flex flex-col items-center p-5 text-white sm:p-10">
      <RoundedH1>
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>{" "}
        SEASON 01 — ETHER
      </RoundedH1>
      <section className="m-5 flex flex-col items-center">
        <BigP>Harnessing the sun.</BigP>
        <BigP>Racing to shine.</BigP>
        <div className="relative h-96 w-sm sm:mt-10 md:w-lg">
          <Image
            src={photoPaths[Index]}
            alt="Photo showcasing advancements"
            className="h-sm animate-fade-in w-sm rounded-full object-contain"
            fill
            key={Index}
            onAnimationEnd={() => {
              setIndex((prevIndex) => {
                if (prevIndex + 1 < photoPaths.length) {
                  return prevIndex + 1;
                } else {
                  return 0;
                }
              });
            }}
            sizes="(max-width: 768px) 384px, 100vw"
          ></Image>
        </div>
      </section>
      <p className="text-muted text-center">
        ECAM Solar Endurance Team (ESET) is a brand-new solar race team founded
        by students & teachers at ECAM Brussels.
      </p>
    </main>
  );
}
