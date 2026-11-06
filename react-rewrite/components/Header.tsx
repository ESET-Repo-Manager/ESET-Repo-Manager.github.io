import { Navbar } from "./Navbar";
import Image from "next/image";
import ESETLogo from "@/public/logo.png";
import Link from "next/link";
import "@/app/globals.css";

export function Header() {
  return (
    <header className="bg-eset-main flex flex-col items-center text-white sm:flex-row sm:items-center sm:gap-10">
      <Link href="/" className="transition-all hover:scale-110">
        <Image alt="eset logo" src={ESETLogo} width={300}></Image>
      </Link>

      <span className="tracking-widest">
        <span className="font-bold">ESET</span>{" "}
        <span className="text-muted">/ Student Solar Racing</span>{" "}
      </span>
      <Navbar></Navbar>
    </header>
  );
}
