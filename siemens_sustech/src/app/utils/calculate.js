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
