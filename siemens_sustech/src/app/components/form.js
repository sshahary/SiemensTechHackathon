"use client";

import { useState } from "react";

const Form = () => {
  const [volume, setVolume] = useState("");
  const [material, setMaterial] = useState("");
  const [process, setProcess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  gap-5 justify-center w-1/3 items-start mx-8 my-14"
    >
      <div className="flex flex-row items-center gap-3">
        <label className="block text-xl font-semibold text-white">
          Volume of Material:
        </label>
        <input
          type="number"
          id="volume"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="mt-2 p-1 border rounded-md"
          required
        />
      </div>
      <div className="flex flex-row items-center gap-3">
        <label
          htmlFor="material"
          className="block mt-4 text-xl font-semibold text-white"
        >
          Choice of Material:
        </label>
        <select
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="mt-2 p-1 border rounded-md"
          required
        >
          <option value="" disabled>
            Select Material
          </option>
          <option value="AlSi10Mg">AlSi10Mg</option>
          <option value="PA12">PA12</option>
          <option value="SS316L">SS316L</option>
        </select>
      </div>
      <div className="flex flex-row items-center gap-3">
        <label
          htmlFor="process"
          className="block text-xl font-semibold font-medium text-white"
        >
          Choice of Process:
        </label>
        <select
          id="process"
          value={process}
          onChange={(e) => setProcess(e.target.value)}
          className="mt-2 p-1 border rounded-md"
          required
        >
          <option value="" disabled>
            Select Process
          </option>
          {material === "AlSi10Mg" && (
            <>
              <option value="BinderJetting">Binder Jetting</option>
              <option value="PowderBedFusion">Powder Bed Fusion</option>
            </>
          )}
          {material === "PA12" && (
            <>
              <option value="BedFusion">Bed Fusion</option>
              <option value="BinderJetting">Binder Jetting</option>
            </>
          )}
          {material === "SS316L" && (
            <option value="PowderBedFusion">Powder Bed Fusion</option>
          )}
        </select>
      </div>
      <div className="flex w-full flex-row justify-center items-center md:pr-16">
        <button
          type="submit"
          className="mt-6 bg-[#009999] text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
