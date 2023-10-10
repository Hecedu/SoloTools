export type Resource = {
  resourceName: string;
  resourceImages: string[];
  resourceAmount: number;
  resourceProduction: number;
  minProduction: number;
  valueEstimationMultiplier?: number;
};

export const terraformingMarsResources: Resource[] = [
  {
    resourceName: "MegaCredits",
    resourceImages: [
      "/gameResources/terraformingMars/resources/megacredit.png",
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: -5,
  },
  {
    resourceName: "Steel",
    resourceImages: [
      "/gameResources/terraformingMars/resources/steel.png",
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: 0,
    valueEstimationMultiplier: 2,
  },
  {
    resourceName: "Titanium",
    resourceImages: [
      "/gameResources/terraformingMars/resources/titanium.png",
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: 0,
    valueEstimationMultiplier: 3,
  },
  {
    resourceName: "Plants",
    resourceImages: [
      "/gameResources/terraformingMars/resources/plant.png",
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: 0,
  },
  {
    resourceName: "Power",
    resourceImages: [
      "/gameResources/terraformingMars/resources/power.png",
      "/gameResources/terraformingMars/resources/arrow.png"
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: 0,
  },
  {
    resourceName: "Heat",
    resourceImages: [
      "/gameResources/terraformingMars/resources/heat.png",
    ],
    resourceAmount: 0,
    resourceProduction: 0,
    minProduction: 0,
  },
];
