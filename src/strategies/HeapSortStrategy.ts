import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class HeapSortStrategy extends AbstractStrategy {
  constructor() {
    super("Heap Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    this.heapSort(localArrayBars, barsAnimations);

    console.log(localArrayBars);
    return barsAnimations;
  }

  private heapSort(arrayBars: Bar[], barsAnimations: BarsAnimations[]): void {
    for (let i = Math.floor(ARRAY_SIZE / 2) - 1; i >= 0; i--) {
      this.heapify(arrayBars, i, ARRAY_SIZE, barsAnimations);
    }

    for (let i = ARRAY_SIZE - 1; i > 0; i--) {
      [arrayBars[0], arrayBars[i]] = [arrayBars[i], arrayBars[0]];
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_SWAP,
        currentBars: [0, i],
      });
      this.heapify(arrayBars, 0, i, barsAnimations);
    }
  }

  private heapify(
    arrayBars: Bar[],
    i: number,
    n: number,
    barsAnimations: BarsAnimations[]
  ): void {
    let largest = i;

    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    if (
      leftChild < n &&
      arrayBars[leftChild].value > arrayBars[largest].value
    ) {
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_COMPARSION,
        currentBars: [leftChild, largest],
      });
      largest = leftChild;
    }

    if (
      rightChild < n &&
      arrayBars[rightChild].value > arrayBars[largest].value
    ) {
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_COMPARSION,
        currentBars: [rightChild, largest],
      });
      largest = rightChild;
    }

    if (largest !== i) {
      [arrayBars[largest], arrayBars[i]] = [arrayBars[i], arrayBars[largest]];
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_SWAP,
        currentBars: [largest, i],
      });
      this.heapify(arrayBars, largest, n, barsAnimations);
    }
  }
}
