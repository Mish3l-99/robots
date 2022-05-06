import React from "react";

const Tech = () => {
  return (
    <div className="w-full light">
      <div className="container">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
            Technology Trends
          </h1>
          <p className="my-3 max-w-[800px] px-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perferendis iste porro cupiditate aspernatur, dolores corrupti quos
            quam deleniti molestiae esse illum expedita quidem veniam?
          </p>
        </div>
        <div className=" grid md:grid-cols-3 gap-1 p-4">
          <div className="">
            <img
              className="h-[370px] w-full object-cover"
              src="/rob-1.jpg"
              alt="/"
            ></img>
          </div>
          <div className="">
            <img
              className="h-[370px] w-full object-cover"
              src="/rob-2.jpg"
              alt="/"
            ></img>
          </div>
          <div className="">
            <img
              className="h-[370px] w-full object-cover"
              src="/rob-3.jpg"
              alt="/"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
