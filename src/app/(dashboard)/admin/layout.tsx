import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css"
import Link from "next/link";
import Image from "next/image";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href="/" className="w-full flex justify-center items-center">
            <Image src="/images/clisis-logo.png" alt="Clisis Logo" width={120} height={70} />
          </Link>

          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar />
          {children}
        </div>
    </div>
  );
}
