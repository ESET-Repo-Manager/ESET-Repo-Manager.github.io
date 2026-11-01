import { Navbar } from "./Navbar";
import Image from "next/image";
import ESETLogo from "@/public/logo.png";
import Link from "next/link";
import "@/app/globals.css";

export function Header() {
  return (
    <header className="bg-eset-main text-white flex flex-col items-center sm:flex-row sm:justify-end">
      <Link href="/" className="hover:scale-110 transition-all">
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
