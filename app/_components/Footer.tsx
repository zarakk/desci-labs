import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterArray = [
  { text: "about" },
  { text: "careers" },
  { text: "customers" },
  { text: "help center" },
  { text: "corporate cards" },
];
const Footer = () => {
  return (
    <div className="bg-[#efefef] w-full flex justify-around items-center relative">
      <div className=" p-4">
        {FooterArray?.map((link, key) => {
          return (
            <Link key={key} className="p-4 font-bold" href="/">
              {link.text}
            </Link>
          );
        })}
      </div>
      <div>
        <Image
          src="footer-logo.svg"
          alt="ramp footer logo"
          className="w-24"
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
