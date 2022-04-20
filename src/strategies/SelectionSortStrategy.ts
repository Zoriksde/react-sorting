import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class SelectionSortStrategy extends AbstractStrategy {
  constructor() {
    super("Selection Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barAnimations: BarsAnimations[] = [];

    for (let i = 0; i < ARRAY_SIZE - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < ARRAY_SIZE; j++) {
        if (localArrayBars[j].value < localArrayBars[minIndex].value)
          minIndex = j;

        barAnimations.push({
          currentAnimation: BarAnimations.BAR_COMPARSION,
          currentBars: [j, i],
        });
      }

      [localArrayBars[minIndex], localArrayBars[i]] = [
        localArrayBars[i],
        localArrayBars[minIndex],
      ];

      barAnimations.push({
        currentAnimation: BarAnimations.BAR_SWAP,
        currentBars: [i, minIndex],
      });
    }

    return barAnimations;
  }
}
