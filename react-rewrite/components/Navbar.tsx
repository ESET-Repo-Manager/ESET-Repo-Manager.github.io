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
          ? "text-hovered-txt bg-active-surface border-hovered-border hover:bg-active-surface hover:border-hovered-border rounded-full border-1 border-solid px-4 py-2 transition-all hover:text-white"
          : "text-muted hover:bg-smooth-surface hover:border-hovered-border rounded-full border-1 border-solid border-transparent px-4 py-2 transition-all hover:scale-105 hover:text-white"
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
      <ol className="m-2 flex flex-row justify-center gap-3 text-sm font-bold tracking-wider transition-all sm:m-5 sm:justify-around sm:gap-7 sm:tracking-wider">
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
