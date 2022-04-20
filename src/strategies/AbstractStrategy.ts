import { Bar } from "./Bar";

export enum BarAnimations {
  BAR_COMPARSION,
  BAR_SWAP,
  BAR_ASSIGNMENT,
  BAR_ASSIGNMENT_REPAIR,
}

export interface BarsAnimations {
  currentBars: number[];
  currentAnimation: BarAnimations;
  assignmentBar?: Bar;
}

export class AbstractStrategy {
  constructor(public name: string) {}

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    return [];
  }
}
