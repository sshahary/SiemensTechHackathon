"use client";
import Image from "next/image";
import {useState} from "react";
import Form from "./components/form";
import Card from "./components/card";
import ResultsTable from "./components/table";
import {resultsData} from "./utils/constants";

// export default function Home() {
//   const [showResults, setShowResults] = useState(false);
//   const handleFormSubmit = () => {
//     // Handle form submission logic if needed
//     setShowResults(true);
//   };
//   return (
//     <section className="w-full flex-center flex-col">
// <nav>
//   <Image
//     src="/assets/logo.png"
//     alt="Siemens logo"
//     width={250}
//     height={200}
//     className="object-contain"
//   />
// </nav>
//       <div className="flex flex-col justify-evenly items-center">
//         <Form />
//         <div className="flex flex-col gap-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {resultsData.map((data, index) => (
//               <Card
//                 key={index}
//                 companyName={data.supplier}
//                 companyLocation={data.country}
//                 processing={data.processing}
//                 shipment={data.shipment}
//                 endOfLife={data.endOfLife}
//                 total={data.total}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="mx-10">
//         <ResultsTable />
//       </div>
//     </section>
//   );
// }

export default function Home() {
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = () => {
    // Handle form submission logic if needed
    setShowResults(true);
  };

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
      <div className="flex flex-col justify-evenly items-center">
        <Form onSubmit={handleFormSubmit} />
        {showResults && (
          <div className="flex flex-col gap-5 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsData.map((data, index) => (
                <Card
                  key={index}
                  companyName={data.supplier}
                  companyLocation={data.country}
                  processing={data.processing}
                  shipment={data.shipment}
                  endOfLife={data.endOfLife}
                  total={data.total}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {showResults && (
        <div className="mx-10">
          <ResultsTable />
        </div>
      )}
    </section>
  );
}
