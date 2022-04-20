import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class MergeSortStrategy extends AbstractStrategy {
  constructor() {
    super("Merge Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    this.mergeSort(localArrayBars, 0, ARRAY_SIZE - 1, barsAnimations);

    return barsAnimations;
  }

  private mergeSort(
    arrayBars: Bar[],
    left: number,
    right: number,
    barsAnimations: BarsAnimations[]
  ): void {
    if (left >= right) return;

    const mid = Math.floor(left + (right - left) / 2);

    this.mergeSort(arrayBars, left, mid, barsAnimations);
    this.mergeSort(arrayBars, mid + 1, right, barsAnimations);

    this.merge(arrayBars, left, mid, right, barsAnimations);
  }

  private merge(
    arrayBars: Bar[],
    left: number,
    middle: number,
    right: number,
    barsAnimations: BarsAnimations[]
  ): void {
    const leftSubarraySize = middle - left + 1;
    const rightSubarraySize = right - middle;
    console.log(left, middle, right);

    const leftSubarray: Bar[] = [];
    const rightSubarray: Bar[] = [];

    for (let i = 0; i < leftSubarraySize; i++)
      leftSubarray.push(arrayBars[left + i]);

    for (let j = 0; j < rightSubarraySize; j++)
      rightSubarray.push(arrayBars[middle + 1 + j]);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftSubarraySize && j < rightSubarraySize) {
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_COMPARSION,
        currentBars: [left + i, middle + 1 + j],
      });

      if (leftSubarray[i].value < rightSubarray[j].value) {
        arrayBars[k] = leftSubarray[i];

        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
          currentBars: [k, left + i],
          assignmentBar: leftSubarray[i],
        });

        i++;
      } else {
        arrayBars[k] = rightSubarray[j];
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
          currentBars: [k, middle + j + 1],
          assignmentBar: rightSubarray[j],
        });
        j++;
      }
      k++;
    }

    while (i < leftSubarraySize) {
      arrayBars[k] = leftSubarray[i];
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
        currentBars: [k, left + i],
        assignmentBar: leftSubarray[i],
      });
      k++;
      i++;
    }

    while (j < rightSubarraySize) {
      arrayBars[k] = rightSubarray[j];
      barsAnimations.push({
        currentAnimation: BarAnimations.BAR_ASSIGNMENT_REPAIR,
        currentBars: [k, middle + 1 + j],
        assignmentBar: rightSubarray[j],
      });
      k++;
      j++;
    }
  }
}
