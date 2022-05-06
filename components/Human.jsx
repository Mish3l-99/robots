import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const opaciVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
const scaleVariants = {
  hidden: {
    rotate: 90,
    scale: 0,
  },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1.4,
      duration: 1,
      type: "tween",
    },
  },
};

const Human = () => {
  return (
    <div className="w-full light ">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={opaciVariants}
            initial="hidden"
            whileInView="visible"
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-lg uppercase">Technology News</h3>
            <h2 className="my-3 text-xl md:text-3xl font-bold text-black">
              Human-Robot
            </h2>
            <p className="p-3 bg-gray-100 rounded-md text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              laboriosam corrupti quam consequatur ullam repudiandae itaque
              sunt. Rerum iusto numquam sed odio nostrum assumenda reiciendis
              accusantium, aperiam possimus quae deleniti fuga repudiandae dicta
              illo voluptatum. Iste sequi nisi necessitatibus nemo. Tempora
              voluptates ipsum consectetur mollitia, iusto repellendus enim
              ipsam ut?
            </p>
          </motion.div>
          <motion.div
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            className="col-span-2 md:col-span-1 flex items-center justify-center"
          >
            {/* <img src="/hand.jpg" className="rounded object-cover " alt="/" /> */}
            <Image
              src="/hand.jpg"
              alt="/"
              objectFit="cover"
              height={400}
              width={500}
              quality={40}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Human;
