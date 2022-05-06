import React from "react";
import { GiAutogun } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";

import { motion } from "framer-motion";

const opaciVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: [1, 0.5, 1],
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 2,
    },
  },
};

const Specs = () => {
  return (
    <div className="w-full dark">
      <div className="container">
        <motion.div
          variants={opaciVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-3 gap-4"
        >
          <div className="col-span-3 md:col-span-1 p-3 md:p-5">
            <div className="text-blue-700">
              <GiAutogun size={55} />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold my-3">
                Robotization
              </h1>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                adipisci ullam ab possimus? Alias molestiae numquam assumenda
                ullam dolore sequi nihil nulla?
              </p>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 p-3 md:p-5">
            <div className="text-blue-700">
              <MdEngineering size={55} />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold my-3">
                Engineering
              </h1>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                adipisci ullam ab possimus? Alias molestiae numquam assumenda
                ullam dolore sequi nihil nulla?
              </p>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 p-3 md:p-5">
            <div className="text-blue-700">
              <FaIndustry size={55} />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold my-3">Industry</h1>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                adipisci ullam ab possimus? Alias molestiae numquam assumenda
                ullam dolore sequi nihil nulla?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Specs;
