import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class BubbleSortStrategy extends AbstractStrategy {
  constructor() {
    super("Bubble Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    for (let i = 0; i < ARRAY_SIZE; i++) {
      for (let j = 0; j < ARRAY_SIZE - i - 1; j++) {
        const currentArrayBar = localArrayBars[j];
        const nextArrayBar = localArrayBars[j + 1];

        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_COMPARSION,
          currentBars: [j, j + 1],
        });

        if (currentArrayBar.value > nextArrayBar.value) {
          [localArrayBars[j], localArrayBars[j + 1]] = [
            localArrayBars[j + 1],
            localArrayBars[j],
          ];
          barsAnimations.push({
            currentAnimation: BarAnimations.BAR_SWAP,
            currentBars: [j, j + 1],
          });
        }
      }
    }

    return barsAnimations;
  }
}
