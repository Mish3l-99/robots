import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";

import { motion } from "framer-motion";
const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const childVariants = {
  hidden: {
    y: 8,
    opacity: 0.2,
  },
  show: {
    y: 0,
    opacity: 1,
    color: "#0000ff",
    transition: {
      duration: 1,
      yoyo: Infinity,
    },
  },
};

const Footer = () => {
  return (
    <div className="w-full dark">
      <div className="container">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-blue-300 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dignissimos nulla doloribus, corrupti voluptate vel laborum amet in
            cum repellendus.
          </p>
          <motion.ul
            variants={parentVariants}
            initial="hidden"
            animate="show"
            className="flex gap-4 justify-center text-blue-100 my-4"
          >
            <motion.li variants={childVariants}>
              <Link href="https://facebook.com" passHref={true}>
                <ImFacebook2 size={23} />
              </Link>
            </motion.li>
            <motion.li variants={childVariants}>
              <Link href="https://twitter.com" passHref={true}>
                <SiTwitter size={23} />
              </Link>
            </motion.li>
            <motion.li variants={childVariants}>
              <Link href="https://linkedin.com" passHref={true}>
                <SiLinkedin size={23} />
              </Link>
            </motion.li>
            <motion.li variants={childVariants}>
              <Link href="https://instagram.com" passHref={true}>
                <GrInstagram size={23} />
              </Link>
            </motion.li>
          </motion.ul>
          <h6>&copy; All Rights Reserved 2022.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
