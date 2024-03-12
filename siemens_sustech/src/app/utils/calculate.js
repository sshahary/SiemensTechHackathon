

const processing = ({ volume, quantity, material, process, maxPrintingSpeed}) => {
    let processingTime = 0;
    let buyToFlyRatio = 0;
    let CO2eqForProcessing = 0;
    let CO2eqForWaste = 0;

    processingTime = volume * quantity / maxPrintingSpeed;
    buyToFlyRatio = 

    let result = CO2eqForProcessing + CO2eqForWaste;
    return (result);
};
