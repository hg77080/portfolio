import React from "react";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Menu = [
  {
    route: "about",
    title: "About",
  },
  {
    route: "skills",
    title: "My Skills",
  },
  {
    route: "blog",
    title: "Work",
  },
  {
    route: "contact",
    title: "Contact",
  },
];
const SideMenu = ({ setOpenSidebar }) => {
  return (
    <motion.div
      initial={{ width: "150px" }}
      animate={{
        width: "100%",
      }}
      transition={{ delay: 0, duration: 1.5 }}
      className="text-[16px] h-screen bg-[black] z-1 fixed top-[0px] text-center "
    >
      <div className="h-[40vh] pt-[48px]">
        <div onClick={() => setOpenSidebar(false)} className="cursor-pointer">
          <Link
            className="text-[100px] font-bold text-brick text-shadow-behind-after leading-[1] cursor-pointer"
            href="/"
          >
            H
          </Link>
          <div className="text-[#fff] text-[24px] font-[700]">Himanshu</div>
        </div>
        <div className="text-[14px] font-['Open_Sans'] text-[#a5a5a5] mt-6">
          Software Developer
        </div>
      </div>
      <div className=" text-[#909096] text-[16px] pt-[5vh]">
        {Menu.map((ele, index) => {
          return (
            <Link
              className="border-b-[#282828] border-b-[1px] border-t-[#282828] border-t-[1px] border-solid bg-[rgba(29,29,29,0.8)] h-[10vh] flex justify-center items-center hover:text-[#08fdd8] cursor-pointer"
              key={index}
              href={`/${ele.route}`}
            >
              {ele.title}
            </Link>
          );
        })}

        <div className="border-b-[#282828] border-b-[1px] border-solid  bg-[rgba(29,29,29,0.8)] flex justify-center gap-[16px] h-[15vh] flex items-center items-center ">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-[#08fdd8] cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="hover:text-[#08fdd8] cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SideMenu;
