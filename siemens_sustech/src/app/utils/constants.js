const supplierDatabase = {
    SupplierA: {
        MachinePBF: "SLM_500_HL",
        MachineBJ: "Jet_Fusion_3200",
        Country: "UK",
        TransportType: "Truck",
        RecycledPortion: {
            AlSi10Mg: 50,
            PA12: 0.5,
            SS316L: 60
        },
        Lifespan: 1.05,
        EndOfLifePortion: {
            AlSi10Mg: 20    ,
            PA12: 0.3,
            SS316L: 36
        }
    },
    SupplierB: {
        MachinePBF: "LASERTEC_30_SLM_2nd_Gen",
        MachineBJ: "Jet_Fusion_3D_5210",
        Country: "China",
        TransportType: "Plane",
        RecycledPortion: {
            AlSi10Mg: 30,
            PA12: 0,
            SS316L: 37
        },
        Lifespan: 0.95,
        EndOfLifePortion: {
            AlSi10Mg: 10,
            PA12: 0,
            SS316L: 40
        }
    }
};

const MaterialDatabase = {
    AlSi10Mg: {
        name: "AlSi10Mg",
        density: 2.67,
        emissionFactor: 7.91,
        emissionFactorRecycling: 2.35,
        recycleFraction: 45,
    },
    PA12: {
        name: "PA12",
        density: 1.02,
        emissionFactor: 7.62,
        emissionFactorRecycling: 2.6,
        recycleFraction: 0.7,
    },
    SS316L: {
        name: "SS316L",
        density: 7.97,
        emissionFactor: 4.27,
        emissionFactorRecycling: 1.39,
        recycleFraction: 52,
    }
}

const MachineDatabase = {
    Jet_Fusion_3D_5210: {
        width: 380,
        depth:284,
        height:380,
        volume:41009.6,
        max_print_speed:5058,
        layer_thickness:0.08,
        power_consumption:12,
    },
    Jet_Fusion_3200: {
        width:380,
        depth:284,
        height:380,
        volume:41009.6,
        max_print_speed:2800,
        layer_thickness:0.08,
        power_consumption:10,
    },
    SLM_500_HL: {
        width:500,
        depth:280,
        height:365,
        volume:51100,
        max_print_speed:171,
        layer_thickness:0.6,
        power_consumption:9,
    },
    LASERTEC_30_SLM_2nd_Gen: {
        width:300,
        depth:300,
        height:300,
        volume:27000,
        max_print_speed:800,
        layer_thickness:0.7,
        power_consumption:15,
    }
}

const processDatabase = {
    PowderBedFusion: {
        Process: "Powder Bed Fusion",
        ReusableMaterialFraction: 0.965
    },
    BinderJetting: {
        Process: "Binder Jetting",
        ReusableMaterialFraction: 0.96
    }
};

const countryDatabase = {
    UK: {
        Country: "UK",
        Distance: 1377,
        CEM: 0.457
    },
    China: {
        Country: "China",
        Distance: 9066,
        CEM: 0.766
    }
};

const transportDatabase = {
    Truck: {
        Transport: "Truck",
        EmissionFactor: 0.000153
    },
    Plane: {
        Transport: "Plane",
        EmissionFactor: 0.00108
    }
};

const resultsData = [
    {
      country: "UK",
      supplier: "Supplier A",
      processing: 88.33,
      shipment: 3.36,
      endOfLife: 33.88,
      total: 132.17,
    },
    {
      country: "USA",
      supplier: "Supplier B",
      processing: 121.67,
      shipment: 0.35,
      endOfLife: 35.24,
      total: 142.96,
    },
    {
      country: "China",
      supplier: "Supplier C",
      processing: 55.17,
      shipment: 156.07,
      endOfLife: 30.27,
      total: 301.89,
    },
  ];

module.exports = {
    supplierDatabase,
    MaterialDatabase,
    MachineDatabase,
    processDatabase,
    countryDatabase,
    transportDatabase,
    resultsData
};