import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

function NavListElement(props: { name: string; reference: Url }) {
  return (
    <li className="text-white hover:bg-blur rounded-full p-2 sm:p-10">
      <Link href={props.reference}> {props.name}</Link>
    </li>
  );
}

export function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-5 sm:gap-7  justify-center sm:justify-end m-2 sm:m-5">
        <NavListElement name="Home" reference="/" />
        <NavListElement name="About" reference="/about" />
        <NavListElement name="Team" reference="/team" />
        <NavListElement name="Sponsors" reference="/sponsors" />
        <NavListElement name="Join" reference="/join" />
      </ul>
    </nav>
  );
}
