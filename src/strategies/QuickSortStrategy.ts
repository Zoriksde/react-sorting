import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class QuickSortStrategy extends AbstractStrategy {
  constructor() {
    super("Quick Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    this.quickSort(localArrayBars, 0, ARRAY_SIZE - 1, barsAnimations);

    return barsAnimations;
  }

  private quickSort(
    arrayBars: Bar[],
    left: number,
    right: number,
    barsAnimations: BarsAnimations[]
  ): void {
    if (left >= right) return;

    const partitionIndex = this.partition(
      arrayBars,
      left,
      right,
      barsAnimations
    );

    this.quickSort(arrayBars, left, partitionIndex - 1, barsAnimations);
    this.quickSort(arrayBars, partitionIndex + 1, right, barsAnimations);
  }

  private partition(
    arrayBars: Bar[],
    left: number,
    right: number,
    barsAnimations: BarsAnimations[]
  ): number {
    const pivot = arrayBars[right];

    let i = left - 1;

    for (let j = left; j <= right; j++) {
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_COMPARSION,
        currentBars: [j, right],
      });

      if (arrayBars[j].value < pivot.value) {
        i++;
        [arrayBars[i], arrayBars[j]] = [arrayBars[j], arrayBars[i]];
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_SWAP,
          currentBars: [j, i],
        });
      }
    }

    [arrayBars[i + 1], arrayBars[right]] = [arrayBars[right], arrayBars[i + 1]];
    barsAnimations.push({
      currentAnimation: BarAnimations.BAR_SWAP,
      currentBars: [i + 1, right],
    });
    return i + 1;
  }
}
