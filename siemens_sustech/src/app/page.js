"use client";
import Image from "next/image";
import { useState } from "react";
import Form from "./components/form";
import Card from "./components/card";

export default function Home() {
  

  return (
    <section className="w-full flex-center flex-col">
      <nav>
        <Image
          src="/assets/logo.png"
          alt="Siemens logo"
          width={250}
          height={200}
          className="object-contain"
        />
      </nav>      
      <div className="flex flex-row">
        <Form />
        <Card companyName="heloo" companyLocation="jka"/>
      </div>
    </section>
  );
}
