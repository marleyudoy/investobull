import React from "react";
import BorderImage from "../assets/home/borderImage.png";

function Heading({ title, des, image, center, large }) {
  const textStyle = center ? "text-center" : "text-start";
  return (
    <div className=" container flex flex-col items-center justify-center">
      <h1
        className={`${
          large ? "h1" : "h2"
        }  ${textStyle} max-w-[40rem] pb-5 text-white leading-tight font-bold font-popin`}
      >
        {title}
      </h1>
      <p
        className={`${textStyle} ${
          large ? "body2" : "body3"
        } text-gray-300 ${large ? "max-w-[41rem]" : "max-w-[35rem]"}`}
      >
        {des}
      </p>
      {image && (
        <div className="mt-5 md:mt-8">{<img src={BorderImage} alt="image" />}</div>
      )}
    </div>
  );
}

export default Heading;
