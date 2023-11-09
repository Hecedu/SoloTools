import {
  ExpeditionsAutomaResource,
  ExpeditionsResourceTypes,
} from "./ExpeditionsResources";

type trackSlot = { hasGlory: boolean };

export type ExpeditionsAutoma = {
  level: number;
  automaName: string;
  currentGloryLevel: number;
  gloryReward: number;
  trackLength: number;
  trackPosition: number;
  trackMilestones: { [id: number]: trackSlot };
  resources: ExpeditionsAutomaResource[];
};

//expeditions automa levels initial values
export const Maszynette: ExpeditionsAutoma = {
  level: 1,
  automaName: "Maszynette",
  currentGloryLevel: 0,
  gloryReward: 4,
  trackLength: 31,
  trackPosition: 0,
  trackMilestones: {
    3: { hasGlory: true },
    8: { hasGlory: true },
    13: { hasGlory: true },
    18: { hasGlory: true },
    22: { hasGlory: true },
    25: { hasGlory: true },
    27: { hasGlory: true },
    29: { hasGlory: true },
  },
  resources: [
    {
      type: ExpeditionsResourceTypes.Map,
      amount: 0,
      scoringValue: 1,
    },
    {
      type: ExpeditionsResourceTypes.Corruption,
      amount: 0,
      scoringValue: 1,
    },
  ],
};

export const Maszyna: ExpeditionsAutoma = {
  level: 2,
  automaName: "Maszyna",
  currentGloryLevel: 0,
  gloryReward: 4,
  trackLength: 29,
  trackPosition: 0,
  trackMilestones: {
    2: { hasGlory: true },
    6: { hasGlory: true },
    11: { hasGlory: true },
    15: { hasGlory: true },
    19: { hasGlory: true },
    23: { hasGlory: true },
    25: { hasGlory: true },
    27: { hasGlory: true },
  },
  resources: [
    {
      type: ExpeditionsResourceTypes.Map,
      amount: 0,
      scoringValue: 1,
    },
    {
      type: ExpeditionsResourceTypes.Corruption,
      amount: 0,
      scoringValue: 2,
    },
  ],
};

export const Automaszyna: ExpeditionsAutoma = {
  level: 3,
  automaName: "Automaszyna",
  currentGloryLevel: 0,
  gloryReward: 5,
  trackPosition: 0,
  trackLength: 25,
  trackMilestones: {
    2: { hasGlory: true },
    5: { hasGlory: true },
    9: { hasGlory: true },
    12: { hasGlory: true },
    15: { hasGlory: true },
    19: { hasGlory: true },
    21: { hasGlory: true },
    23: { hasGlory: true },
  },
  resources: [
    {
      type: ExpeditionsResourceTypes.Corruption,
      amount: 0,
      scoringValue: 2,
    },
    {
      type: ExpeditionsResourceTypes.Map,
      amount: 0,
      scoringValue: 1,
    },
  ],
};
