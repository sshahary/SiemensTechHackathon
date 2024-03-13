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
  process,
  supplier,
) => {
  // Convert user input to the appropriate types
  const vol = parseFloat(volume);
  const qty = parseInt(quantity, 10);
  const density = MaterialDatabase[material].density;

  // Calculate mass of part
  const massOfPart = vol * qty * density * 0.001;

  // Getiing the machine name for the process.
  let machineName;
  if (process === "BinderJetting")
    machineName = supplier.MachineBJ;
  else if (process === "PowderBedFusion")
    machineName = supplier.MachinePBF;
  const machine = MachineDatabase[machineName];

  // Getting suppliers country
  const country = supplier.Country;

  // Calculate Processing Time
  const maxPrintSpeed = machine.max_print_speed;
  const processTime = (volume * quantity) / maxPrintSpeed;

  // Calculate Buy to Fly Ratio
  const volumeOfMachine = machine.volume;
  const buyToFlyRatio = volumeOfMachine / volume / quantity;

  // Calculate emmision for processing
  const powerStandard = machine.power_consumption;
  const countryEnergyMix = countryDatabase[country].CEM;
  const processEmission = powerStandard * processTime * countryEnergyMix;

  // Calculate wasteEmission
  const reusableFraction = processDatabase[process].ReusableMaterialFraction;
  const emissionFactorMaterial = MaterialDatabase[material].emissionFactor;
  const recyclePortion = supplier.RecycledPortion[material];
  const wasteEmission = ((1 -reusableFraction) / 100) * (buyToFlyRatio - 1) * massOfPart * ((1 - (recyclePortion / 100)) * emissionFactorMaterial);

  // Calculate processingEmission
  const totalProcessEmission = processEmission + wasteEmission;

  // Calculate shipEmission
  const distance = countryDatabase[country].Distance;
  const transportEmissionFactor = transportDatabase[supplier.TransportType].EmissionFactor;
  const lifeSpan = supplier.Lifespan;
  const shipEmission = distance * transportEmissionFactor * massOfPart / lifeSpan;

  // Calculate End of Line
  const eolPortionMaterial = supplier.EndOfLifePortion[material];
  const recycleFraction = MaterialDatabase[material].recycleFraction;
  const nonRecycledPartsEmission = (1 - eolPortionMaterial / 100) * (1 - recycleFraction / 100) * massOfPart * emissionFactorMaterial;
  const recycledMaterialEmissionFactor =  MaterialDatabase[material].emissionFactorRecycling;
  const recycledPartsEmission = (1 - eolPortionMaterial / 100) * (recycleFraction / 100) * massOfPart * recycledMaterialEmissionFactor;
  const eolEmission = nonRecycledPartsEmission + recycledPartsEmission;

  const totalEmission = totalProcessEmission + shipEmission + eolEmission;

  const results = {
    totalProcessEmission,
    shipEmission,
    eolEmission,
    totalEmission
  }

  return (results);
};