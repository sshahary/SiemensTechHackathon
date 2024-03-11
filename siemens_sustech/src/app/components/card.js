import Image from "next/image";
import React from "react";

const Card = (companyName, companyLocation, result) => {
  return (
    <div className="bg-transparent border-white border rounded-md flex flex-col max-h-52 min-w-72">
      <span className="top-0 w-16 text-center text-white bg-red-500">result</span>
      <Image
        src="/assets/logo.png"
        alt="Siemens logo"
        width={200}
        height={200}
        className="object-contain"
      />
      <h1 className="text-white">companyName</h1>
      <h2 className="text-white">companyLocation</h2>
    </div>
  );
};

export default Card;
