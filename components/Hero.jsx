import React from "react";
import { RiEye2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      // staggerChildren: 0.4,
    },
  },
};
const spanVariants = {
  hidden: {
    opacity: 4,
  },
  visible: {
    opacity: 0,
    transition: {
      delay: 2,
      duration: 1,
      yoyo: Infinity,
    },
  },
};
const titleVariants = {
  hidden: {
    x: 2000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 70,
    },
  },
};

const paraVariants = {
  hidden: {
    y: 1200,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1.2,
      type: "tween",
      duration: 2,
    },
  },
};

const buttonVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.1,
    transition: {
      delay: 4,
      duration: 1,
      yoyo: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-screen bg-black text-gray-400 p-4 md:p-24 grid grid-cols-3 md:gap-8 relative overflow-hidden"
    >
      <div className="col-span-3 md:col-span-2 ">
        <motion.span
          variants={spanVariants}
          className="block mb-2 text-4xl md:text-8xl text-blue-700"
        >
          |
        </motion.span>
        <motion.h1
          variants={titleVariants}
          className="text-4xl md:text-8xl mb-8 russo"
        >
          Robots Are The Future
          <span className="text-blue-700">.</span>
        </motion.h1>
        <motion.p variants={paraVariants} className="text-sm md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          cum officiis in laudantium! Odio similique molestiae id magni eum!
          Distinctio.
        </motion.p>
      </div>
      <div className="mt-4 md:my-auto col-span-3 md:col-span-1 h-[200px] md:h-[300px] flex items-center justify-center relative">
        <Image
          alt="/"
          src="/top.png"
          layout="fill"
          // width={300}
          // height={400}
          objectFit="cover"
          quality={40}
        />
      </div>

      {/* button absolute */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.button
          variants={buttonVariants}
          className="mx-auto py-1 px-4 rounded bg-blue-700 text-slate-300 flex justify-center items-center gap-1"
        >
          Discover
          <RiEye2Line className="mt-[2px] md:mt-[3px]" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;
