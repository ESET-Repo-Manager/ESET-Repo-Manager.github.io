import Link from "next/link";

function NavListElement(props: { name: string; reference: string }) {
  return (
    <li className="text-white hover:bg-sky-800 rounded-full p-2 sm:p-10">
      <Link href={props.reference}> {props.name}</Link>
    </li>
  );
}

export function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-5 sm:gap-7  justify-center sm:justify-end m-2 sm:m-5">
        <NavListElement name="Home" reference="/" />
        <NavListElement name="About" reference="/" />
        <NavListElement name="Team" reference="/" />
        <NavListElement name="Sponsors" reference="/" />
        <NavListElement name="Join" reference="/" />
      </ul>
    </nav>
  );
}
