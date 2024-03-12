import Image from "next/image";
import React from "react";

const Card = ({ companyName, companyLocation, result }) => {
  return (
    <div className="bg-transparent border-white border rounded-md flex flex-col  min-w-72 hover:bg-slate-800">
      <div className="flex flex-row justify-end">
        <span className="w-16 text-center text-white bg-red-500 rounded-tr">
          ${result}
        </span>
      </div>
      <div className="flex items-center justify-center my-5">
        <Image
          src="/assets/logo.png"
          alt="Siemens logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1/2 mx-5 my-5">
        <h1 className="text-white text-xl">{companyName}</h1>
        <h2 className="text-gray-400 text-m">{companyLocation}</h2>
      </div>
    </div>
  );
};

export default Card;
