import { Navbar } from "./Navbar";
import Image from "next/image";
import ESETLogo from "@/public/logo.png";
import Link from "next/link";

export function Header() {
  return (
    <header className=" bg-sky-950 text-white flex flex-col items-center sm:flex-row sm:justify-end">
      <Link href="/" className="hover:scale-110 transition-all">
        <Image alt="eset logo" src={ESETLogo} width={200}></Image>
      </Link>

      <span> ESET / Student Solar Racing </span>
      <Navbar></Navbar>
    </header>
  );
}
