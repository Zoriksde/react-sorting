import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class InsertionSortStrategy extends AbstractStrategy {
  constructor() {
    super("Insertion Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    for (let i = 1; i < ARRAY_SIZE; i++) {
      const currentElement = localArrayBars[i];
      let j = i - 1;

      while (j >= 0 && currentElement.value < localArrayBars[j].value) {
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_COMPARSION,
          currentBars: [i, j],
        });

        localArrayBars[j + 1] = localArrayBars[j];

        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_ASSIGNMENT,
          currentBars: [j + 1, j],
        });

        j--;
      }

      localArrayBars[j + 1] = currentElement;
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
        currentBars: [j + 1, i],
        assignmentBar: currentElement,
      });
    }

    return barsAnimations;
  }
}
