const processing = ({
  volume,
  quantity,
  material,
  process,
  maxPrintingSpeed,
  volumeOfMachine,
  powerStandardOfMachine,
  processingTime,
  countryEnergyMix,
  recycledPortion,
  emissionFactor
}) => {
  let massOfPart = 0;
  let processingTime = 0;
  let buyToFlyRatio = 0;
  let CO2eqForProcessing = 0;
  let CO2eqForWaste = 0;

  processingTime = (volume * quantity) / maxPrintingSpeed;
  buyToFlyRatio = volumeOfMachine / volume / quantity;
  CO2eqForProcessing =
    powerStandardOfMachine * processingTime * countryEnergyMix;
  CO2eqForWaste =
    (1 - reusablePortion) *
    (buyToFlyRatio - 1) *
    massOfPart *
    (1 - recycledPortion) * emissionFactor;
  let result = CO2eqForProcessing + CO2eqForWaste;
  return result;
};

//  chatgpt version

// Function to calculate the mass of the part
function calculateMassOfPart(volume, quantity, densityOfMaterial) {
    return volume * quantity * densityOfMaterial * 0.001;
}

// Function to calculate processing time
function calculateProcessingTime(volume, quantity, maxPrintingSpeed) {
    return volume * quantity / maxPrintingSpeed;
}

// Function to calculate Buy to Fly ratio
function calculateBuyToFlyRatio(volumeOfMachine, volume, quantity) {
    return volumeOfMachine / (volume * quantity);
}

// Function to calculate CO2eq for processing
function calculateCO2eqProcessing(powerStandard, processingTime, countryEnergyMix) {
    return powerStandard * processingTime * countryEnergyMix;
}

// Function to calculate CO2eq for waste
function calculateCO2eqWaste(reusablePortion, buyToFlyRatio, massOfPart, recycledPortion, emissionFactor) {
    return (1 - reusablePortion) * (buyToFlyRatio - 1) * massOfPart * (1 - recycledPortion) * emissionFactor;
}

// Function to calculate CO2eq total processing phase
function calculateCO2eqTotalProcessing(co2eqProcessing, co2eqWaste) {
    return co2eqProcessing + co2eqWaste;
}

// Function to calculate CO2eq for shipment phase
function calculateCO2eqShipment(distanceToCountry, emissionFactorTransport, massOfPart, lifespanComponent) {
    return distanceToCountry * emissionFactorTransport * massOfPart / lifespanComponent;
}

// Function to calculate CO2eq for end of life phase
function calculateCO2eqEndOfLife(nonRecycledPortion, recycledFraction, massOfPart, emissionFactorMaterial, emissionFactorRecycledMaterial) {
    const co2eqNonRecycledParts = (1 - nonRecycledPortion) * (1 - recycledFraction) * massOfPart * emissionFactorMaterial;
    const co2eqRecycledParts = (1 - nonRecycledPortion) * recycledFraction * massOfPart * emissionFactorRecycledMaterial;
    return co2eqNonRecycledParts + co2eqRecycledParts;
}

// Function to calculate CO2eq total
function calculateCO2eqTotal(co2eqTotalProcessing, co2eqShipment, co2eqEndOfLife) {
    return co2eqTotalProcessing + co2eqShipment + co2eqEndOfLife;
}

// Export functions for use in other modules if needed
module.exports = {
    calculateMassOfPart,
    calculateProcessingTime,
    calculateBuyToFlyRatio,
    calculateCO2eqProcessing,
    calculateCO2eqWaste,
    calculateCO2eqTotalProcessing,
    calculateCO2eqShipment,
    calculateCO2eqEndOfLife,
    calculateCO2eqTotal
};