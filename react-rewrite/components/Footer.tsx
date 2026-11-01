import Image from "next/image";
import Link from "next/link";
import InstaLogo from "@/public/Instalogo.png";
import LILogo from "@/public/LIlogo.png";
import "@/app/globals.css";

export function Footer() {
  return (
    <footer className="bg-eset-main flex flex-row gap-10 justify-center p-5 sm:gap-20 text-white">
      <Link
        href="https://www.linkedin.com/company/eset-ecam-solar-endurance-team"
        className="hover:scale-110 transition-all"
      >
        <Image src={LILogo} alt="LinkedIn link" width={50}></Image>
      </Link>
      <span className="text-xs sm:text-sm text-muted">
        © ECAM Solar Endurance Team — ESET
      </span>
      <Link
        href="https://www.instagram.com/eset_ecam/"
        className="hover:scale-110 transition-all"
      >
        <Image src={InstaLogo} alt="Instagram Link" width={50}></Image>
      </Link>
    </footer>
  );
}
