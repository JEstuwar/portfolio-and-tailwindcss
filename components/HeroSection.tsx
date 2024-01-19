"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

// ==== FONTS ==== //
import { Catamaran, Martel_Sans, Pridi } from "@next/font/google";

// ==== Settings Fonst ==== //
const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
});

const martel = Martel_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-martel_sans",
});

const pridi = Pridi({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pridi",
});

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src="/developer-pic-1.png" alt="" width={400} height={400} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1
            className={`${catamaran.variable} font-catamaran text-4xl font-bold mt-6 md:mt-0 md:text-7xl`}
          >
            Hi, I&#39;m Jose!
          </h1>{" "}
          <p
            className={`${martel.variable} font-martel text-lg mt-4 mb-6 md:text-2xl`}
          >
            I&#39;m a{" "}
            <span
              className={`${martel.variable} font-martel font-semibold text-main_link`}
            >
              Software Engineer{" "}
            </span>
            based in Los Angeles, CA. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className={`${martel.variable} font-martel text-columms_button_text font-semibold px-6 py-3 bg-columms_button rounded-full shadow cursor-pointer hover:bg-teal-700`}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
