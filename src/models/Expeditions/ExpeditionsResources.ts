export enum ExpeditionsResourceTypes {
  Corruption,
  Map
}

export type ExpeditionsAutomaResource = {
  type: ExpeditionsResourceTypes;
  amount: number;
  scoringValue: number;
};
