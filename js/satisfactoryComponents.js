//Satisfactory component data.
var componentData = {
	
	//RESOURCE DEPOSIT:
    Resource: {
        createdComponents: ["Resource"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [1]
    },
	
	//ORES
	Bauxite:{
        createdComponents: ["Bauxite"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60] 
    },	
	CateriumOre: {
        createdComponents: ["CateriumOre"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60]
    },	
	Coal: {
        createdComponents: ["Coal"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60]
    },
	CopperOre: {
        createdComponents: ["CopperOre"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60]
    },
    CrudeOil: {
        createdComponents: ["CrudeOil"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [120] 
    },    
    IronOre: {
        createdComponents: ["IronOre"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60]
    },    
    Limestone: {
        createdComponents: ["Limestone"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60]
    },
	RawQuartz:{
        createdComponents: ["RawQuartz"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60] 
    }, 
	SAMOre:{
		createdComponents: ["SAMOre"],
		components: ["Resource"],
		amounts: [1],
		usedPerMinute: [1],
		createdPerMinute: [60]
	},
	Sulfur:{
		createdComponents: ["Sulfur"],
		components: ["Resource"],
		amounts: [1],
		usedPerMinute: [1],
		createdPerMinute: [60]
	},
	Uranium:{
		createdComponents: ["Uranium"],
		components: ["Resource"],
		amounts: [1],
		usedPerMinute: [1],
		createdPerMinute: [60]
	},
    Water:{
        createdComponents: ["Water"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [60] 
    },   
   
	//COMPONENTS WITHOUT BYPRODUCT	    
	AdaptiveControlUnit: {
        createdComponents: ["AdaptiveControlUnit"],
        components: ["AutomatedWiring", "CircuitBoard", "HeavyModularFrame", "Computer"],
        amounts: [15, 10, 2, 2],
        usedPerMinute: [7.5, 5, 1, 1],
        createdPerMinute: [1]
    },
	AILimiter:{
        createdComponents: ["AILimiter"],
        components: ["CopperSheet","Quickwire"],
        amounts: [5, 20],
        usedPerMinute:[25, 100],
        createdPerMinute: [5]
    },
	AlcladAluminumSheet: {
        createdComponents: ["AlcladAluminumSheet"],
        components: ["AluminumIngot", "CopperIngot"],
        amounts: [8, 3],
        usedPerMinute: [60, 22.5],
        createdPerMinute: [30]
    },
    AluminumIngot: {
        createdComponents: ["AluminumIngot"],
        components: ["AluminumScrap", "Silica"],
        amounts: [12, 7],
        usedPerMinute: [240, 140],
        createdPerMinute: [80]
    },
    AluminumScrap: {
        createdComponents: ["AluminumScrap", "Water"],
        components: ["AluminaSolution", "PetroleumCoke"],
        amounts: [4, 1],
        usedPerMinute: [240, 60],
        createdPerMinute: [360, 60]
    },
	AutomatedWiring: {
        createdComponents: ["AutomatedWiring"],
        components: ["Stator", "Cable"],
        amounts: [1, 20],
        usedPerMinute: [2.5, 50],
        createdPerMinute: [2.5]
    },
	Battery: {
        createdComponents: ["Battery"],
        components: ["AlcladAluminumSheet", "Wire", "Sulfur", "Plastic"],
        amounts: [8, 16, 20, 8],
        usedPerMinute: [15, 30, 37.5, 15],
        createdPerMinute: [5.625]
    },
	BlackPowder:{
        createdComponents: ["BlackPowder"],
        components: ["Coal", "Sulfur"],
        amounts: [1, 2],
        usedPerMinute:[7.5, 15],
        createdPerMinute: [7.5]
    },
    Biomass:{
		createdComponents: ["Biomass"],
		components: ["Resource"],
		amounts: [1],
		usedPerMinute: [60],
		createdPerMinute: [60]
	},
	Cable: {
        createdComponents: ["Cable"],
        components: ["Wire"],
        amounts: [2],
        usedPerMinute: [60],
        createdPerMinute: [30]
    },
	CateriumIngot:{
        createdComponents: ["CateriumIngot"],
        components: ["CateriumOre"],
        amounts: [3],
        usedPerMinute:[45],
        createdPerMinute: [15]
    },
	CircuitBoard: {
        createdComponents: ["CircuitBoard"],
        components: ["CopperSheet", "Plastic"],
        amounts: [2, 4],
        usedPerMinute: [15, 30],
        createdPerMinute: [7.5]
    },
	CompactedCoal:{
        createdComponents: ["CompactedCoal"],
        components: ["Coal", "Sulfur"],
        amounts: [5, 5],
        usedPerMinute:[25, 25],
        createdPerMinute: [25]
    },
    Computer: {
        createdComponents: ["Computer"],
        components: ["CircuitBoard", "Cable","Plastic","Screw"],
        amounts: [10, 9, 18, 52],
        usedPerMinute: [25,22.5,45,130],
        createdPerMinute: [2.5]
    },
    Concrete: {
        createdComponents: ["Concrete"],
        components: ["Limestone"],
        amounts: [3],
        usedPerMinute: [45],
        createdPerMinute: [15]
    },
    CopperIngot: {
        createdComponents: ["CopperIngot"],
        components: ["CopperOre"],
        amounts: [1],
        usedPerMinute: [30],
        createdPerMinute: [30]
    },
	CopperSheet: {
        createdComponents: ["CopperSheet"],
        components: ["CopperIngot"],
        amounts: [2],
        usedPerMinute: [20],
        createdPerMinute: [10]
    },
	CrystalOscillator:{
        createdComponents: ["CrystalOscillator"],
        components: ["QuartzCrystal", "Cable", "ReinforcedIronPlate"],
        amounts: [36, 28, 5],
        usedPerMinute:[18,14,2.5],
        createdPerMinute: [1]
    },
	ElectromagneticControlRod: {
        createdComponents: ["ElectromagneticControlRod"],
        components: ["Stator","AILimiter"],
        amounts: [3, 2],
        usedPerMinute: [6, 4],
        createdPerMinute: [4]
    },
	EmptyCanister: {
        createdComponents: ["EmptyCanister"],
        components: ["Plastic"],
        amounts: [2],
        usedPerMinute: [30],
        createdPerMinute: [60]
    },
	EncasedIndustrialBeam: {
        createdComponents: ["EncasedIndustrialBeam"],
        components: ["SteelBeam", "Concrete"],
        amounts: [4, 5],
        usedPerMinute: [24, 30],
        createdPerMinute: [6]
    },
    EncasedUraniumCell: {
        createdComponents: ["EncasedUraniumCell"],
        components: ["UraniumPellet", "Concrete"],
        amounts: [40, 9],
        usedPerMinute: [40, 0],
        createdPerMinute: [10]
    },
	Fabric:{
        createdComponents: ["Fabric"],
        components: ["Mycelia", "Biomass"],
        amounts: [1, 5],
        usedPerMinute:[15, 75],
        createdPerMinute: [15]
    },
	HeatSink: {
        createdComponents: ["HeatSink"],
        components: ["AlcladAluminumSheet", "Rubber"],
        amounts: [8, 14],
        usedPerMinute: [40, 70],
        createdPerMinute: [10]
    },
	HeavyModularFrame: {
        createdComponents: ["HeavyModularFrame"],
        components: ["ModularFrame", "SteelPipe", "EncasedIndustrialBeam", "Screw"],
        amounts: [5, 15, 5, 100],
        usedPerMinute: [10, 30, 10, 200],
        createdPerMinute: [2]
    },	
	HighSpeedConnector:{
        createdComponents: ["HighSpeedConnector"],
        components: ["Quickwire", "Cable", "CircuitBoard"],
        amounts: [56, 10, 1],
        usedPerMinute:[210, 37.5, 3.75],
        createdPerMinute: [3.75]
    },
    IronIngot: {
        createdComponents: ["IronIngot"],
        components: ["IronOre"],
        amounts: [1],
        usedPerMinute: [30],
        createdPerMinute: [30]
    },
    IronPlate: {
        createdComponents: ["IronPlate"],
        components: ["IronIngot"],
        amounts: [3],
        usedPerMinute: [30],
        createdPerMinute: [20]
    },
    IronRod: {
        createdComponents: ["IronRod"],
        components: ["IronIngot"],
        amounts: [1],
        usedPerMinute: [15],
        createdPerMinute: [15]
    },	
	LiquidBiofuel: {
        createdComponents: ["LiquidBiofuel"],
        components: ["SolidBiofuel", "Water"],
        amounts: [6, 3],
        usedPerMinute: [90, 45],
        createdPerMinute: [60]
    },
	ModularEngine: {
        createdComponents: ["ModularEngine"],
        components: ["Motor", "Rubber", "SmartPlating"],
        amounts: [2, 15, 2],
        usedPerMinute: [2, 5, 2],
        createdPerMinute: [1]
    },
	ModularFrame: {
        createdComponents: ["ModularFrame"],
        components: ["ReinforcedIronPlate", "IronRod"],
        amounts: [3, 12],
        usedPerMinute: [3, 12],
        createdPerMinute: [2]
    },
	Motor: {
        createdComponents: ["Motor"],
        components: ["Rotor", "Stator"],
        amounts: [2,2],
        usedPerMinute: [10, 10],
        createdPerMinute: [5]
    },
    Mycelia: {
        createdComponents: ["Mycelia"],
        components: ["Resource"],
        amounts: [1],
        usedPerMinute: [1],
        createdPerMinute: [1]
    },
	NuclearFuelRod: {
        createdComponents: ["NuclearFuelRod"],
        components: ["EncasedUraniumCell", "EncasedIndustrialBeam", "ElectromagneticControlRod"],
        amounts: [25, 3, 5],
        usedPerMinute: [10, 1.2, 2],
        createdPerMinute: []
    },
    NuclearWaste: {
        createdComponents: ["NuclearWaste"],
        components: ["NuclearFuelRod"],
        amounts: [1],
        usedPerMinute: [0.2],
        createdPerMinute: [5]
    },
    PackagedCrudeOil:{
        createdComponents: ["PackagedCrudeOil"],
        components: ["CrudeOil", "EmptyCanister"],
        amounts: [2, 2],
        usedPerMinute: [30, 30],
        createdPerMinute: [30]
    },
	PackagedFuel: {
        createdComponents: ["PackagedFuel"],
        components: ["Fuel", "EmptyCanister"],
        amounts: [2,2],
        usedPerMinute: [40,40],
        createdPerMinute: [40]
    },
    PackagedHeavyOilResidue: {
        createdComponents: ["PackagedHeavyOilResidue"],
        components: ["HeavyOilResidue", "EmptyCanister"],
        amounts: [2, 2],
        usedPerMinute: [30, 30],
        createdPerMinute: [30]
    },
	PackagedLiquidBiofuel: {
        createdComponents: ["PackagedLiquidBiofuel"],
        components: ["LiquidBiofuel", "EmptyCanister"],
        amounts: [2,2],
        usedPerMinute: [40,40],
        createdPerMinute: [40]
    },
	PackagedTurbofuel: {
        createdComponents: ["PackagedTurbofuel"],
        components: ["Turbofuel", "EmptyCanister"],
        amounts: [2, 2],
        usedPerMinute:[20, 20],
        createdPerMinute: [20]
    },
	PackagedWater: {
        createdComponents: ["PackagedWater"],
        components: ["Water", "EmptyCanister"],
        amounts: [2, 2],
        usedPerMinute: [60, 60],
        createdPerMinute: [60]
    },
	PetroleumCoke: {
        createdComponents: ["PetroleumCoke"],
        components: ["HeavyOilResidue"],
        amounts: [4],
        usedPerMinute: [40],
        createdPerMinute: [120]
    },
	QuartzCrystal:{
        createdComponents: ["QuartzCrystal"],
        components: ["RawQuartz"],
        amounts: [5],
        usedPerMinute:[37.5],
        createdPerMinute: [22.5]
    },
	Quickwire:{
        createdComponents: ["Quickwire"],
        components: ["CateriumIngot"],
        amounts: [1],
        usedPerMinute:[12],
        createdPerMinute: [60]
    },	
	RadioControlUnit:{
        createdComponents: ["RadioControlUnit"],
        components: ["HeatSink", "Rubber", "CrystalOscillator", "Computer"],
        amounts: [4, 16, 1, 1],
        usedPerMinute:[10, 40, 2.5, 2.5],
        createdPerMinute: [2.5]
    },
    ReinforcedIronPlate: {
        createdComponents: ["ReinforcedIronPlate"],
        components: ["IronPlate", "Screw"],
        amounts: [6, 12],
        usedPerMinute: [30, 60],
        createdPerMinute: [5]
    },
	Rotor: {
        createdComponents: ["Rotor"],
        components: ["IronRod", "Screw"],
        amounts: [5, 25],
        usedPerMinute: [20, 100],
        createdPerMinute: [4]
    },
    Screw: {
        createdComponents: ["Screw"],
        components: ["IronRod"],
        amounts: [1],
        usedPerMinute: [10],
        createdPerMinute: [40]
    },
	Silica:{
        createdComponents: ["Silica"],
        components: ["RawQuartz"],
        amounts: [3],
        usedPerMinute:[22.5],
        createdPerMinute: [37.5]
    },
    SmartPlating: {
        createdComponents: ["SmartPlating"],
        components: ["ReinforcedIronPlate", "Rotor"],
        amounts: [1, 1],
        usedPerMinute: [2, 2],
        createdPerMinute: [2]
    },
    SolidBiofuel: {
        createdComponents: ["SolidBiofuel"],
        components: ["Biomass"],
        amounts: [8],
        usedPerMinute: [120],
        createdPerMinute: [60]
    },
	Stator: {
        createdComponents: ["Stator"],
        components: ["SteelPipe", "Wire"],
        amounts: [3, 8],
        usedPerMinute: [15, 40],
        createdPerMinute: [5]
    },
    SteelBeam: {
        createdComponents: ["SteelBeam"],
        components: ["SteelIngot"],
        amounts: [4],
        usedPerMinute: [60],
        createdPerMinute: [15]
    },
    SteelIngot: {
        createdComponents: ["SteelIngot"],
        components: ["IronOre", "Coal"],
        amounts: [3, 3],
        usedPerMinute: [45, 45],
        createdPerMinute: [45]
    },
    SteelPipe: {
        createdComponents: ["SteelPipe"],
        components: ["SteelIngot"],
        amounts: [3],
        usedPerMinute: [30],
        createdPerMinute: [20]
    },
	SulfuricAcid: {
        createdComponents: ["SulfuricAcid"],
        components: ["Sulfur", "Water"],
        amounts: [5, 5],
        usedPerMinute: [50, 50],
        createdPerMinute: [100]
    },
	Supercomputer:{
        createdComponents: ["Supercomputer"],
        components: ["Computer", "AILimiter","HighSpeedConnector", "Plastic"],
        amounts: [2, 2, 3, 28],
        usedPerMinute:[3.75, 3.75, 5.625, 52.5],
        createdPerMinute: [1.875]
    },
	Turbofuel:{
        createdComponents: ["Turbofuel"],
        components: ["Fuel", "CompactedCoal"],
        amounts: [6, 4],
        usedPerMinute:[22.5, 15],
        createdPerMinute: [18.75]
    },
	TurboMotor: {
        createdComponents: ["TurboMotor"],
        components: ["HeatSink","RadioControlUnit","Motor","Rubber"],
        amounts: [4,2,4,24],
        usedPerMinute: [7.5, 3.75, 7.5, 45],
        createdPerMinute: [1.875]
    },
    VersatileFramework: {
        createdComponents: ["VersatileFramework"],
        components: ["ModularFrame", "SteelBeam"],
        amounts: [1, 12],
        usedPerMinute: [2.5, 30],
        createdPerMinute : [5]
    },
    Wire: {
        createdComponents: ["Wire"],
        components: ["CopperIngot"],
        amounts: [1],
        usedPerMinute: [15],
        createdPerMinute: [30]
    },    
	
	//COMPONENTS WITH BYPRODUCTS
	AluminaSolution: {
        createdComponents: ["AluminaSolution", "Silica"],
        components: ["Bauxite", "Water"],
        amounts: [7, 10],
        usedPerMinute: [70, 100],
        createdPerMinute: [80, 20]
    },
	Fuel:{
		createdComponents: ["Fuel", "PolymerResin"],
		components: ["CrudeOil"],
		amounts: [6],
		usedPerMinute: [60],
		createdPerMinute: [40, 30]
	},
	HeavyOilResidue:{
        createdComponents: ["HeavyOilResidue", "Plastic"],
        components: ["CrudeOil"],
        amounts: ["3"],
        usedPerMinute: [30],
        createdPerMinute: [10, 20]
    },
	Plastic: {
        createdComponents: ["Plastic", "HeavyOilResidue"],
        components: ["CrudeOil"],
        amounts: [3],
        usedPerMinute: [30],
        createdPerMinute: [20, 10]
    },
    PolymerResin: {
        createdComponents: ["PolymerResin", "Fuel"],
        components: ["CrudeOil"],
        amounts: [6],
        usedPerMinute: [60],
        createdPerMinute: [30, 40]
    },
    Rubber: {
        createdComponents: ["Rubber", "HeavyOilResidue"],
        components: ["CrudeOil"],
        amounts: [3],
        usedPerMinute: [30],
        createdPerMinute: [20, 20]
    },
	UraniumPellet: {
        createdComponents: ["UraniumPellet", "Sulfuric Acid"],
        components: ["Uranium","SulfuricAcid"],
        amounts: [5, 8],
        usedPerMinute: [50, 80],
        createdPerMinute: [50, 20]
    }
}