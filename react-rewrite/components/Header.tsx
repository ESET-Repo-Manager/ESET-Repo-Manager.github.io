import { Navbar } from "./Navbar";
import Image from "next/image";
import ESETLogo from "@/public/logo.png";
import Link from "next/link";

export function Header() {
  return (
    <div className=" bg-sky-950 flex flex-col items-center sm:flex-row sm:justify-end">
      <Link href="/">
        <Image alt="eset logo" src={ESETLogo} width={200}></Image>
      </Link>

      <span> ESET / Student Solar Racing </span>
      <Navbar></Navbar>
    </div>
  );
}
