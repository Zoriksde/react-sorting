import { DescendingOrderGenerator, RandomBarsGenerator } from "../generators";
import {
  BubbleSortStrategy,
  InsertionSortStrategy,
  MergeSortStrategy,
  SelectionSortStrategy,
} from "../strategies";

// Strategies that should be displayed in header
export const headerStrategies = [
  new BubbleSortStrategy(),
  new InsertionSortStrategy(),
  new SelectionSortStrategy(),
  new MergeSortStrategy(),
];

// Generators that should be displayed in header
export const headerGenerators = [
  new RandomBarsGenerator(),
  new DescendingOrderGenerator(),
];
