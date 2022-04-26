# Sorting Visualizer

Sorting Visualizer project that helps others to understand basic ideas behind sorting algorithms.
What's more the sorting algorithms aren't the ones which are implemented. There is also a capability to generate some basic arrays.
Project is written in ReactJS with Typescript with some CSS styling.

In case if you want to run it on your local machine clone this repositry and then put
```npm install``` on your command line.

If you would like to look at this project online [visit sorting visualizer](https://react-sorting.vercel.app/)

Project is written using OOP Principles and different Design Patterns, which makes it easy to maintain, extend, fix and change.
Each algorithm is implemented as single class which inherits from abstract one (Strategy Design Pattern).
The same concept is used in array generators algorithms.

Ex. of abstract strategy:

```ts 
import { Bar } from "./Bar";

export enum BarAnimations {
  BAR_COMPARSION,
  BAR_SWAP,
  BAR_ASSIGNMENT,
  BAR_ASSIGNMENT_REPAIR,
}

export interface BarsAnimations {
  currentBars: number[];
  currentAnimation: BarAnimations;
  assignmentBar?: Bar;
}

export class AbstractStrategy {
  constructor(public name: string) {}

  runSorting(arrayBars: Bar[]): BarsAnimations[] {
    return [];
  }
}
```

Visualization is made with usage of custom hooks, css transition property and setTimeout asynchronous function.
After some interval of time specified bars are assigned to different type of transition property.

Ex. of custom useVisualizer hook methods:

```ts
 generatedValues.forEach((generatedValue, _i) => {
      setTimeout(() => {
        setArrayBars((prevArrayBars) => {
          const updatedArrayBars = [...prevArrayBars];

          updatedArrayBars[_i].setBarValue(generatedValue);
          updatedArrayBars[_i].setBarType(BarType.BAR_GENERATED);

          if (_i === generatedValues.length - 1) setIsGenerating(false);

          return updatedArrayBars;
        });
      }, 20 * _i);
    });
```

Ex. of css class transition property:

```css
.generated-bar {
    transition: height 0.3s ease-in-out;
}
```

Algorithms that are covered here:

| Algorithm      | Methodology |
| ----------- | ----------- |
| Bubble Sort | Compares two adjacent values |
| Insertion Sort | Inserts current value in correct position |
| Selection Sort | Selects minimum value in rest of array |
| Merge Sort | Divides problem into subproblems and solve them recursively |
| Quick Sort | Divides problem into subproblems and solve them recursively |
| Heap Sort |  Constructs Max-Heap of values and picks highest value each time |
| Shell Sort | Extended version of Insertion Sort |
| Cocktail Shaker Sort | Bidirectional Bubble Sort |

Maze patterns that are covered here:

| Algorithm      | Description |
| ----------- | ----------- |
| Random Bars | Randomly shuffles array |
| Descending Order | Generates sorted array in descending order |


Project is written with main aim to help anyone who is interested in these topics. Enjoy playing around!
