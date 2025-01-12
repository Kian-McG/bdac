"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Activities",
      href: "/activities",
    },
    {
      name: "Membership",
      href: "/membership",
    },
  ];

  const isActivePathname = usePathname();

  return (
    <nav className="bg-white fixed w-full z-10 border-b-2 border-red-600">
      <div className="container flex justify-between items-center py-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          priority
          className="h-[50px] w-[50px] md:h-[88px] md:w-[88px]"
        />
        <ul className="gap-8 hidden md:flex">
          {navLinks.map((link, index) => {
            const name = link.name.toUpperCase();
            return (
              <li
                key={index}
                className={cn(
                  " hover:text-red-600 relative transition flex items-center py-1 font-black",
                  {
                    "text-red-600": isActivePathname === link.href,
                    "text-red-600/50": isActivePathname !== link.href,
                  }
                )}
              >
                <Link href={link.href}>{name}</Link>
                {isActivePathname === link.href ? (
                  <motion.div
                    className={"bg-yellow-300 h-[4px] w-full absolute bottom-0"}
                    layoutId="underline"
                  ></motion.div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <MenuIcon size={24} className="md:hidden" fill="#000000"/>

      </div>
    </nav>
  );
};

export default NavBar;
