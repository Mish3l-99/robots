import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const opaciVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: [1, 0, 1],
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 2,
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={opaciVariants}
      initial="hidden"
      whileInView="visible"
      className="w-full light"
    >
      <div className="container">
        <div className="grid md:grid-rows-3 md:grid-cols-3 gap-2">
          <div className="bg-blue-400 flex items-center">
            <p className="uppercase text-3xl md:text-5xl p-4">
              the robots of CES 2019
            </p>
          </div>

          <div className="md:row-span-3 w-full h-full">
            {/* <img className="object-cover" src="/man.jpg" alt="/" /> */}
            <div className="w-full h-full relative">
              <Image
                alt="/"
                src="/man.jpg"
                layout="fill"
                objectFit="cover"
                quality={40}
              />
            </div>
          </div>
          <div className="md:row-span-3 bg-slate-300 ">
            <p className="p-4 md:p-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              similique nesciunt officiis. Quaerat laborum, facere, excepturi
              quibusdam quam error voluptate sed nesciunt aspernatur rerum velit
              assumenda, nulla tempora quas illum iure dignissimos minima
              sapiente quia nemo! Doloremque aspernatur repudiandae illo ducimus
              et saepe id assumenda modi enim consectetur nulla illum quaerat,
              hic inventore perferendis. Aperiam totam debitis est eaque harum
              vitae ad optio animi vero! Dicta dolorum molestias delectus. In
              quas rerum sunt. Voluptatum ipsa, quibusdam, et cumque reiciendis
              laborum totam pariatur inventore hic veniam dolore blanditiis
              aperiam. Molestiae qui maxime officiis reiciendis obcaecati
              voluptates debitis ab quis voluptatibus placeat!
            </p>
          </div>
          <div className="md:row-span-2 flex justify-center">
            {/* <img className="object-cover" src="/robot.jpg" alt="/" /> */}
            <div className="w-full h-full relative">
              <Image
                alt="/"
                src="/robot.jpg"
                layout="fill"
                objectFit="cover"
                quality={40}
              />
            </div>
          </div>
        </div>

        {/* button div */}
        <div className="mt-4 md:mt-12 text-center">
          <button className="bg-blue-500 uppercase py-1 px-5 text-white hover:bg-white hover:text-blue-700 duration-500">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
