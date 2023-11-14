import {
  ExpeditionsAutomaResource,
  ExpeditionsResourceTypes,
} from "./ExpeditionsResources";

type trackSlot = { hasGlory: boolean };

export class ExpeditionsAutoma {
  level: number;
  automaName: string;
  currentGloryLevel: number;
  gloryReward: number;
  trackLength: number;
  trackPosition: number;
  trackMilestones: { [id: number]: trackSlot };
  resources: ExpeditionsAutomaResource[];

  //constructor for the automa
  constructor(
    level: number,
    automaName: string,
    currentGloryLevel: number,
    gloryReward: number,
    trackLength: number,
    trackPosition: number,
    trackMilestones: { [id: number]: trackSlot },
    resources: ExpeditionsAutomaResource[]
  ) {
    this.level = level;
    this.automaName = automaName;
    this.currentGloryLevel = currentGloryLevel;
    this.gloryReward = gloryReward;
    this.trackLength = trackLength;
    this.trackPosition = trackPosition;
    this.trackMilestones = trackMilestones;
    this.resources = resources;
  }
};

//expeditions automa levels initial values
export const Maszynette: ExpeditionsAutoma = new ExpeditionsAutoma(
  1,
  "Maszynette",
  0,
  4,
  31,
  0,
  {
    3: { hasGlory: true },
    8: { hasGlory: true },
    13: { hasGlory: true },
    18: { hasGlory: true },
    22: { hasGlory: true },
    25: { hasGlory: true },
    27: { hasGlory: true },
    29: { hasGlory: true },
  },
  [
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
  ]
);

export const Maszyna: ExpeditionsAutoma = new ExpeditionsAutoma(
  2,
  "Maszyna",
  0,
  4,
  29,
  0,
  {
    2: { hasGlory: true },
    6: { hasGlory: true },
    11: { hasGlory: true },
    15: { hasGlory: true },
    19: { hasGlory: true },
    23: { hasGlory: true },
    25: { hasGlory: true },
    27: { hasGlory: true },
  },
  [
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
  ]
);
export const Automaszyna: ExpeditionsAutoma = new ExpeditionsAutoma(
  3,
  "Automaszyna",
  0,
  5,
  25,
  0,
  {
    2: { hasGlory: true },
    5: { hasGlory: true },
    9: { hasGlory: true },
    12: { hasGlory: true },
    15: { hasGlory: true },
    19: { hasGlory: true },
    21: { hasGlory: true },
    23: { hasGlory: true },
  },
  [
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
);
//function that generates eight random track milestones within the track length. 
//The first milestone always has a key of 1
//The last milestone always has a key of trackLength - 1
//The function returns an object with the track milestones
function randomizeTrackMilestones(trackLength: number) {
  const trackMilestones: { [id: number]: trackSlot } = {};
  trackMilestones[trackLength - 2] = { hasGlory: true };
  let i = 0;
  while (i < 7) {
    const randomMilestone = Math.floor(Math.random() * (trackLength - 3)) + 1;
    if (trackMilestones[randomMilestone] === undefined) {
      trackMilestones[randomMilestone] = { hasGlory: true };
      i++;
    }
  }
  return trackMilestones;
}

//function returns an automa object with the track milestones randomized it's inputs is the track length
export function randomizeAutoma() {
  const trackLength = Math.floor(Math.random() * 11) + 21;
  console.log(trackLength)
  const trackMilestones = randomizeTrackMilestones(trackLength);
  console.log(trackMilestones)
  return new ExpeditionsAutoma(
    100,
    `Randoma`,
    0,
    Math.floor(Math.random() * 2) + 4,
    trackLength,
    0,
    trackMilestones,
    [
      {
        type: ExpeditionsResourceTypes.Map,
        amount: 0,
        scoringValue: Math.floor(Math.random() * 2) + 1,
      },
      {
        type: ExpeditionsResourceTypes.Corruption,
        amount: 0,
        scoringValue: Math.floor(Math.random() * 2) + 1,
      },
    ]
  );
}