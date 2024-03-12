// const processing = ({
//   volume,
//   quantity,
//   material,
//   process,
//   maxPrintingSpeed,
//   volumeOfMachine,
//   powerStandardOfMachine,
//   processingTime,
//   countryEnergyMix,
//   recycledPortion,
//   emissionFactor
// }) => {
//   let massOfPart = 0;
//   let processingTime = 0;
//   let buyToFlyRatio = 0;
//   let CO2eqForProcessing = 0;
//   let CO2eqForWaste = 0;

//   processingTime = (volume * quantity) / maxPrintingSpeed;
//   buyToFlyRatio = volumeOfMachine / volume / quantity;
//   CO2eqForProcessing =
//     powerStandardOfMachine * processingTime * countryEnergyMix;
//   CO2eqForWaste =
//     (1 - reusablePortion) *
//     (buyToFlyRatio - 1) *
//     massOfPart *
//     (1 - recycledPortion) * emissionFactor;
//   let result = CO2eqForProcessing + CO2eqForWaste;
//   return result;
// };

function calculateTotalCO2eq(
    // Inputs for processing time calculation
    volume, quantity, maxPrintingSpeed,
    // Inputs for Buy to Fly ratio calculation
    volumeOfMachine,
    // Inputs for CO2eq processing calculation
    powerStandard, countryEnergyMix,
    // Inputs for CO2eq waste calculation
    reusablePortion, massOfPart, recycledPortion, emissionFactor,
    // Inputs for CO2eq shipment phase calculation
    distanceToCountry, emissionFactorTransport, lifespanComponent
) {
    // Calculate processing time
    const processingTime = volume * quantity / maxPrintingSpeed;
    
    // Calculate Buy to Fly ratio
    const buyToFlyRatio = volumeOfMachine / (volume * quantity);
    
    // Calculate CO2eq for processing
    const co2eqProcessing = powerStandard * processingTime * countryEnergyMix;
    
    // Calculate CO2eq for waste
    const co2eqWaste = (1 - reusablePortion) * (buyToFlyRatio - 1) * massOfPart * (1 - recycledPortion) * emissionFactor;
    
    // Calculate total CO2eq for processing phase
    const co2eqTotalProcessing = co2eqProcessing + co2eqWaste;
    
    // Calculate CO2eq for shipment phase
    const co2eqShipment = distanceToCountry * emissionFactorTransport * massOfPart / lifespanComponent;
    
    // Return total CO2eq (processing + shipment)
    return {
        co2eqTotalProcessing,
        co2eqShipment,
        co2eqTotal: co2eqTotalProcessing + co2eqShipment
    };
}

// Function to calculate the mass of the part
function calculateMassOfPart(volume, quantity, densityOfMaterial) {
    return volume * quantity * densityOfMaterial * 0.001;
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

const calculateEnvironmentalImpact = (supplier) => {
    // Determine machine and transport details based on the supplier and material
    const machineKey = process === "PowderBedFusion" ? 'MachinePBF' : 'MachineBJ';
    const machine = MachineDatabase[supplier[machineKey]];
    const transport = transportDatabase[supplier.TransportType];
    const country = countryDatabase[supplier.Country];
    
    // Calculate mass of part
    const massOfPart = volume * quantity * materialDensity;
    
    // Calculate CO2 emissions for production: this is a placeholder and should include machine use, power consumption, etc.
    const productionCO2 = massOfPart * MaterialDatabase[material].emissionFactor * machine.power_consumption; // Simplified
    
    // Calculate CO2 for transportation
    const shipmentCO2 = transport.EmissionFactor * country.Distance * massOfPart;
    
    // Calculate CO2 for end of life: This is a placeholder, adjust with your actual calculation
    const endOfLifeCO2 = massOfPart * MaterialDatabase[material].emissionFactorRecycling * supplier.EndOfLifePortion[material]; // Simplified
    
    return productionCO2 + shipmentCO2 + endOfLifeCO2;
  };

// Export functions for use in other modules if needed
module.exports = {
    calculateMassOfPart,
    calculateCO2eqShipment,
    calculateCO2eqEndOfLife,
    calculateCO2eqTotal,
    calculateEnvironmentalImpact
};