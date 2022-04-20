import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class ShellSortStrategy extends AbstractStrategy {
  constructor() {
    super("Shell Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    for (
      let gap = Math.floor(ARRAY_SIZE / 2);
      gap > 0;
      gap = Math.floor(gap / 2)
    ) {
      for (let i = gap; i < ARRAY_SIZE; i++) {
        let currentElement = localArrayBars[i];
        let j;

        for (
          j = i;
          j >= gap && localArrayBars[j - gap].value > currentElement.value;
          j -= gap
        ) {
          barsAnimations.push({
            currentAnimation: BarAnimations.BAR_COMPARSION,
            currentBars: [i, j - gap],
          });

          localArrayBars[j] = localArrayBars[j - gap];

          barsAnimations.push({
            currentAnimation: BarAnimations.BAR_ASSIGNMENT,
            currentBars: [j, j - gap],
          });
        }

        localArrayBars[j] = currentElement;
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
          currentBars: [j, i],
          assignmentBar: currentElement,
        });
      }
    }

    return barsAnimations;
  }
}
