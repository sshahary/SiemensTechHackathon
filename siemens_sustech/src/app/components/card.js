"use client";

import Image from "next/image";
import React, {useState} from "react";

const Card = ({ companyName, companyLocation, processing, shipment, endOfLife, total }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-md flex flex-col p-4 m-2 ${total < 135 ? 'shadow-sm shadow-white' : ''}`}>
      <div className="flex flex-row justify-between">
        <span className="font-semibold text-center text-white bg-[#ED7D31] rounded-tl-md py-1 px-3">
        {Math.floor(Math.random() * (999 - 100 + 1)) + 100} $
        </span>
        <span className={`font-bold text-center py-1 px-3 rounded-tr-md ${
      total < 135 ? 'bg-[#009999] text-white' : 'bg-red-600 text-white'
    }`}>
        {Math.round(total)}kg CO₂
        </span>
      </div>
      <div className="flex items-center justify-center my-5">
        {/* Image component or img tag depending on your setup */}
        <img
          src="/assets/logo.png"
          alt="Company logo"
          width={150} // Tailwind doesn't directly control Image component props
          height={150}
          className="w-40 h-40 object-contain" // Adjust size as needed
        />
      </div>
      <div className="text-center mx-5 my-5">
        <h1 className="text-white text-xl">{companyName}</h1>
        <h2 className="text-gray-400">{companyLocation}</h2>
      </div>
      {showDetails && (
        <div className="text-white mx-5 my-3">
          <p>Processing: {processing.toFixed(2)} kgCO2e</p>
          <p>Shipment: {shipment.toFixed(2)} kgCO2e</p>
          <p>End of Life: {endOfLife.toFixed(2)} kgCO2e</p>
        </div>
      )}
      <div className="flex items-center justify-center m-5">
        <button 
          className="text-white bg-transparent rounded border border-[#009999] px-4 py-2 hover:bg-slate-700"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Offer Details & Order"}
        </button>
      </div>
    </div>
  );
};

export default Card;
