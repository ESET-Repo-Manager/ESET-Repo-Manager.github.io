"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useState } from "react";

function NavListElement(props: {
  name: string;
  reference: Url;
  position: number;
  stateArray: boolean[];
  onSelect: (position: number) => void;
}) {
  return (
    <li
      onClick={() => props.onSelect(props.position)}
      className={
        props.stateArray[props.position]
          ? "text-hovered-txt bg-active-surface border-hovered-border border-solid border-2 hover:text-white hover:bg-active-surface hover:border-hovered-border rounded-full p-4 transition-all"
          : "text-muted border-transparent border-solid border-2 hover:text-white hover:scale-105 hover:bg-active-surface hover:border-hovered-border rounded-full p-4 transition-all"
      }
    >
      <Link href={props.reference}> {props.name}</Link>
    </li>
  );
}

export function Navbar() {
  const [isActive, setActive] = useState([true, false, false, false, false]);
  function HandleSetActive(position: number) {
    const myArr = [false, false, false, false, false];
    myArr[position] = true;
    setActive(myArr);

    function HandleSetActive(position: number) {
      const myArr = [false, false, false, false, false];
      myArr[position] = true;
      setActive(myArr);
    }
  }
  return (
    <nav>
      <ol className="flex flex-row gap-5 sm:gap-7  justify-center sm:justify-around m-2 sm:m-5 transition-all">
        <NavListElement
          name="Home"
          reference="/"
          position={0}
          stateArray={isActive}
          onSelect={HandleSetActive}
        />
        <NavListElement
          name="About"
          reference="/about"
          position={1}
          stateArray={isActive}
          onSelect={HandleSetActive}
        />
        <NavListElement
          name="Team"
          reference="/team"
          position={2}
          stateArray={isActive}
          onSelect={HandleSetActive}
        />
        <NavListElement
          name="Sponsors"
          reference="/sponsors"
          position={3}
          stateArray={isActive}
          onSelect={HandleSetActive}
        />
        <NavListElement
          name="Join"
          reference="/join"
          position={4}
          stateArray={isActive}
          onSelect={HandleSetActive}
        />
      </ol>
    </nav>
  );
}
