import {resultsData} from "../utils/constants";

const ResultsTable = (result) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold text-white mb-4">Results (kgCO2e)</h2>
      <table className="w-full text-left text-white">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th className="py-2 px-4">Country</th>
            <th className="py-2 px-4">Supplier</th>
            <th className="py-2 px-4">Processing</th>
            <th className="py-2 px-4">Shipment</th>
            <th className="py-2 px-4">End of Life</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((row, index) => (
            <tr
              className="border-b border-gray-700 last:border-b-0"
              key={index}
            >
              {console.log(result.result[index].eolEmission)}
              <td className="py-3 px-4">{row.country}</td>
              <td className="py-3 px-4">{row.supplier}</td>
              <td className="py-3 px-4">{result.result[index].totalProcessEmission.toFixed(2)}</td>
              <td className="py-3 px-4">{result.result[index].shipEmission.toFixed(2)}</td>
              <td className="py-3 px-4">{result.result[index].eolEmission.toFixed(2)}</td>
              <td className="py-3 px-4 font-bold">{result.result[index].totalEmission.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
