import React from "react";
import { Link } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter, ImYoutube } from "react-icons/im";
import logonobg from "../assets/logonobg.png";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-900 w-full h-[10rem] xs:h-[18rem] xs:text-sm text-white flex justify-between relative bottom-0 p-6 border-none ">
        <div className="flex xs:flex-col gap-9 ">
          <div>
            <img src={logonobg} alt="logo" className="w-[8rem] " />
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="flex gap-4 ">
              <MdLocalPhone />
              <a href="tel:123-456-7890">123-456-7890</a>
            </p>
            <p className="flex gap-4">
              <AiOutlineMail />
              <a href="mailto:buzoemma6@mail.com">Jon Doe</a>
            </p>
            <button className=" my-5 py-2 px-6 border rounded bg-amber-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
          </div>
        </div>
        <div className="flex xs:flex-col xd:hidden  ">
          <Link
            to={"/programme"}
            className="pr-8 font-semibold text-lg text-white xs:text-sm"
          >
            Programmes
          </Link>
          <Link
            to={"/contact"}
            className=" font-semibold text-lg text-white xs:text-sm xs:pt-2"
          >
            Contact
          </Link>
        </div>
        <div className=" flex xs:flex-col ">
          <a
            href="https://web.facebook.com"
            target={"_blank"}
            className="pr-4 xs:pt-4 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/i/flow/login"
            target={"_blank"}
            className="pr-4 text-2xl xs:pt-4"
          >
            <ImTwitter />
          </a>
          <a
            href="https://youtube.com"
            target={"_blank"}
            className="text-2xl xs:pt-4"
          >
            <ImYoutube />
          </a>
        </div>
      </div>
      <p className="bg-blue-900 flex place-content-center italic text-xs text-gray-200 py-2 border-none">&copy; GlasPlus 2022</p>
    </>
  );
};

export default Footer;
