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
      <div className="flex flex-row justify-evenly items-center">
        <Form />
        <div className="flex flex-col gap-5">
          <Card
            companyName="Siemes"
            companyLocation="Heilbronn, Germany,"
            result="200"
          />
          <Card
            companyName="Siemes"
            companyLocation="Heilbronn, Germany,"
            result="200"
          />
          <Card
            companyName="Siemes"
            companyLocation="Heilbronn, Germany,"
            result="200"
          />
        </div>
      </div>
    </section>
  );
}
