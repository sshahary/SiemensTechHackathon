import {
  supplierDatabase,
  MaterialDatabase,
  MachineDatabase,
  processDatabase,
  countryDatabase,
  transportDatabase,
} from "../utils/constants";

export const calculateEnvironmentalImpact = (
  volume,
  quantity,
  material,
  process
) => {
  // Convert user input to the appropriate types
  const vol = parseFloat(volume);
  const qty = parseInt(quantity, 10);
  const density = MaterialDatabase[material].density;

  // Calculate mass of part
  const massOfPart = vol * qty * density * 0.001;

  // Find the supplier and machine information based on the process
  const supplier = Object.values(supplierDatabase).find((s) =>
    s.RecycledPortion.hasOwnProperty(material)
  );
  const machine = MachineDatabase[supplier.MachinePBF]; // Assuming Powder Bed Fusion for simplicity
  const country = countryDatabase[supplier.Country];
  const processInfo = processDatabase[process];

  // Calculate processing time
  const processingTime = (vol * qty) / machine.max_print_speed;

  // Calculate Buy to Fly ratio
  const buyToFlyRatio = machine.volume / vol / qty;

  // Calculate CO2eq for Processing
  const CO2eqProcessing =
    machine.power_consumption * processingTime * country.CEM;

  // Calculate CO2eq for Waste
  const CO2eqWaste =
    (1 - processInfo.ReusableMaterialFraction) *
    (buyToFlyRatio - 1) *
    massOfPart *
    (1 - supplier.RecycledPortion[material] * 0.01) *
    MaterialDatabase[material].emissionFactor;

  // Calculate total CO2eq for the Processing phase
  const CO2eqTotalProcessing = CO2eqProcessing + CO2eqWaste;

  return {
    massOfPart,
    processingTime,
    buyToFlyRatio,
    CO2eqProcessing,
    CO2eqWaste,
    CO2eqTotalProcessing,
  };
};
