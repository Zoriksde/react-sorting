import { DescendingOrderGenerator, RandomBarsGenerator } from "../generators";
import {
  BubbleSortStrategy,
  CocktailShakerSortStrategy,
  HeapSortStrategy,
  InsertionSortStrategy,
  MergeSortStrategy,
  QuickSortStrategy,
  SelectionSortStrategy,
  ShellSortStrategy,
} from "../strategies";

// Strategies that should be displayed in header
export const headerStrategies = [
  new BubbleSortStrategy(),
  new InsertionSortStrategy(),
  new SelectionSortStrategy(),
  new MergeSortStrategy(),
  new QuickSortStrategy(),
  new HeapSortStrategy(),
  new ShellSortStrategy(),
  new CocktailShakerSortStrategy(),
];

// Generators that should be displayed in header
export const headerGenerators = [
  new RandomBarsGenerator(),
  new DescendingOrderGenerator(),
];
