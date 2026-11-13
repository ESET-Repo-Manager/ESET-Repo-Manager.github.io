"use client";
import Image from "next/image";
import { RoundedH1 } from "@/components/RoundedH1";
import { useState } from "react";
import { RoundedLink } from "@/components/RoundedLink";
import { RoundedEdgeRectangle } from "@/components/RoundedEdgeRectangle";
import { BigH2 } from "@/components/BigH2";

const photoPaths = ["/showCase1.jpg", "/showCase2.jpg", "/showCase3.jpg"];

export default function Home() {
  const [Index, setIndex] = useState(0);
  console.log("je suis bg");
  return (
    <main className="bg-eset-main flex flex-col items-center p-5 text-white sm:p-10">
      <RoundedH1>
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>{" "}
        SEASON 01 — ETHER
      </RoundedH1>
      <section className="m-5 flex flex-col items-center">
        <BigH2>Harnessing the sun. Racing to shine.</BigH2>
        <div className="relative mr-5 h-96 w-sm sm:mt-10 md:w-lg">
          <Image
            src={photoPaths[Index]}
            alt="Photo showcasing advancements"
            className="h-sm animate-fade-in w-sm transform-gpu rounded-full object-contain will-change-[opacity]"
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
      <p className="text-muted text-center sm:w-xl sm:tracking-widest">
        ECAM Solar Endurance Team (ESET) is a brand-new solar race team founded
        by students & teachers at ECAM Brussels.
      </p>
      <div className="flex flex-row">
        <RoundedLink
          src="/join"
          content="Join the Crew"
          isDark={false}
          showArrow={true}
        ></RoundedLink>
        <RoundedLink
          src="/team"
          content="Read our story"
          isDark={true}
          showArrow={false}
        ></RoundedLink>
      </div>
      <div className="my-5 flex flex-col items-center gap-3 sm:flex-row">
        <RoundedEdgeRectangle
          title="100% Solar Powered"
          content="Designing ultra-efficient photovoltaic cells, aerodynamics and electric drivetrains"
        ></RoundedEdgeRectangle>
        <RoundedEdgeRectangle
          title="Open to everyone"
          content="Come if you too want to be gleaming brighter than sun. Teachers & students welcome"
        ></RoundedEdgeRectangle>
        <RoundedEdgeRectangle
          title="Preparing to race"
          content="First round in September 2028"
        ></RoundedEdgeRectangle>
      </div>
    </main>
  );
}
