import React from "react";
import Image from "next/image";
const BarLayout = ({ children }) => {
  return (
    <div>
      <div className="hero bg-base-200 py-10 mb-5">
        <div className="hero-content flex-col lg:flex-row">
          {/*
          <img
            src="https://images.squarespace-cdn.com/content/v1/60146ec5ca0b337ce6a69312/131df8be-46ff-426f-9d93-723afe05a95a/dtp_roxy2019_186.jpg"
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
          />
          use next image component
        */}
          <Image
            width={400}
            height={300}
            src="https://images.squarespace-cdn.com/content/v1/60146ec5ca0b337ce6a69312/131df8be-46ff-426f-9d93-723afe05a95a/dtp_roxy2019_186.jpg"
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
          ></Image>
          <div>
            <h1 className="text-5xl font-bold">Welcome to our bar</h1>
            <p className="py-6">
              Feel free to order as many drinks as you like
            </p>
            <button className="btn btn-primary">Let's get some</button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default BarLayout;

//min width 1024 - lg  - flex-row
//all width below will get flex-col
