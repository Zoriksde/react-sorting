import { ARRAY_SIZE } from "../components/Visualizer";
import {
  AbstractStrategy,
  BarAnimations,
  BarsAnimations,
} from "./AbstractStrategy";
import { Bar } from "./Bar";

export class CocktailShakerSortStrategy extends AbstractStrategy {
  constructor() {
    super("Cocktail Shaker Sort");
  }

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    const localArrayBars = [...arrayBars];
    const barsAnimations: BarsAnimations[] = [];

    let swapped = true;
    let left = 0;
    let right = ARRAY_SIZE;

    while (swapped) {
      swapped = false;

      for (let i = left; i < right - 1; i++) {
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_COMPARSION,
          currentBars: [i, i + 1],
        });

        if (localArrayBars[i].value > localArrayBars[i + 1].value) {
          [localArrayBars[i], localArrayBars[i + 1]] = [
            localArrayBars[i + 1],
            localArrayBars[i],
          ];
          swapped = true;

          barsAnimations.push({
            currentAnimation: BarAnimations.BAR_SWAP,
            currentBars: [i, i + 1],
          });
        }
      }

      if (!swapped) break;

      swapped = false;
      right--;

      for (let i = right - 1; i >= left; i--) {
        barsAnimations.push({
          currentAnimation: BarAnimations.BAR_COMPARSION,
          currentBars: [i, i + 1],
        });

        if (localArrayBars[i].value > localArrayBars[i + 1].value) {
          [localArrayBars[i], localArrayBars[i + 1]] = [
            localArrayBars[i + 1],
            localArrayBars[i],
          ];
          swapped = true;

          barsAnimations.push({
            currentAnimation: BarAnimations.BAR_SWAP,
            currentBars: [i, i + 1],
          });
        }
      }

      left++;
    }

    return barsAnimations;
  }
}
