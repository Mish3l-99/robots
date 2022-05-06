import React from "react";

import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="w-full dark">
      <div className="container">
        <div className="border-l-8 border-[#0000ff] p-3 flex flex-col md:flex-row gap-6 items-center">
          <motion.span
            animate={{
              color: "#0000ff",
              transition: {
                duration: 1.4,
                yoyo: Infinity,
              },
            }}
            className="block mb-4 text-[120px]"
          >
            “Q
          </motion.span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            porro magnam quasi voluptate praesentium, ipsam placeat hic, tempora
            explicabo illum, ad quibusdam reiciendis. Quisquam doloribus eos
            quasi. Ipsam consectetur voluptate magni aperiam possimus ex
            laboriosam, voluptatibus inventore laudantium minus nisi!
            <span className="mt-6 block text-right font-bold text-xl text-blue-700">
              - Jeff Bezos
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
