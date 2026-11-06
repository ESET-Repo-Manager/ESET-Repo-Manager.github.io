import Image from "next/image";
import Link from "next/link";
import InstaLogo from "@/public/Instalogo.png";
import LILogo from "@/public/LIlogo.png";
import "@/app/globals.css";

export function Footer() {
  return (
    <footer className="bg-eset-main flex flex-col items-center gap-5 p-5 text-white sm:flex-row sm:justify-center">
      <div className="flex flex-row sm:gap-10">
        <Link
          href="https://www.linkedin.com/company/eset-ecam-solar-endurance-team"
          className="mr-15 transition-all hover:scale-110 sm:m-0"
        >
          <Image src={LILogo} alt="LinkedIn link" width={50}></Image>
        </Link>
        <span className="text-muted hidden text-xs sm:inline sm:text-sm">
          © ECAM Solar Endurance Team — ESET
        </span>
        <Link
          href="https://www.instagram.com/eset_ecam/"
          className="transition-all hover:scale-110"
        >
          <Image src={InstaLogo} alt="Instagram Link" width={50}></Image>
        </Link>
      </div>

      <span className="text-muted block text-xs sm:hidden sm:text-sm">
        © ECAM Solar Endurance Team — ESET
      </span>
    </footer>
  );
}
