import { useCallback, useEffect, useState } from "react";
import { AbstractGenerator } from "../generators";
import { AbstractStrategy, Bar, BarAnimations, BarType } from "../strategies";

interface VisualizerHookProps {
  array: Bar[];
}

export const useVisualizer = ({ array }: VisualizerHookProps) => {
  const [arrayBars, setArrayBars] = useState<Bar[]>([]);
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initializes array bars with usage of array
  const initArrayBars = useCallback((): void => {
    setArrayBars(array);
  }, [array]);

  const runSorting = (strategy: AbstractStrategy): void => {
    setIsVisualizing(true);
    setIsLoading(true);

    const barsAnimations = strategy.runSorting(arrayBars);

    barsAnimations.forEach((barsAnimation, _i) => {
      setTimeout(() => {
        setArrayBars((prevArrayBars) => {
          const updatedArrayBars = [...prevArrayBars];
          const currentBars = barsAnimation.currentBars;

          updatedArrayBars.forEach((arrayBar) =>
            arrayBar.setBarType(BarType.BAR_UNUSED)
          );

          if (barsAnimation.currentAnimation === BarAnimations.BAR_COMPARSION) {
            updatedArrayBars[currentBars[0]].setBarType(BarType.BAR_VISUALIZED);
            updatedArrayBars[currentBars[1]].setBarType(BarType.BAR_VISUALIZED);
          } else if (
            barsAnimation.currentAnimation === BarAnimations.BAR_SWAP
          ) {
            [
              updatedArrayBars[currentBars[0]],
              updatedArrayBars[currentBars[1]],
            ] = [
              updatedArrayBars[currentBars[1]],
              updatedArrayBars[currentBars[0]],
            ];
          } else if (
            barsAnimation.currentAnimation === BarAnimations.BAR_ASSIGNMENT
          ) {
            updatedArrayBars[currentBars[0]] = updatedArrayBars[currentBars[1]];
          } else if (
            barsAnimation.currentAnimation ===
            BarAnimations.BAR_ASSIGNMENT_REPAIR
          ) {
            if (barsAnimation.assignmentBar)
              updatedArrayBars[currentBars[0]] = barsAnimation.assignmentBar;
          }

          if (_i === barsAnimations.length - 1) {
            setIsLoading(false);
            updatedArrayBars[currentBars[0]].setBarType(BarType.BAR_UNUSED);
            updatedArrayBars[currentBars[1]].setBarType(BarType.BAR_UNUSED);
          }

          return updatedArrayBars;
        });
      }, 10 * _i);
    });
  };

  const runGenerating = (generator: AbstractGenerator): void => {
    setIsGenerating(true);

    const generatedValues = generator.generate();

    generatedValues.forEach((generatedValue, _i) => {
      setTimeout(() => {
        setArrayBars((prevArrayBars) => {
          const updatedArrayBars = [...prevArrayBars];

          updatedArrayBars[_i].setBarValue(generatedValue);

          if (_i === generatedValues.length - 1) setIsGenerating(false);

          return updatedArrayBars;
        });
      }, 10 * _i);
    });
  };

  const clearSorting = (generator: AbstractGenerator): void => {
    setIsVisualizing(false);

    runGenerating(generator);
  };

  useEffect(() => {
    initArrayBars();
  }, [initArrayBars]);

  return {
    arrayBars,
    isVisualizing,
    isGenerating,
    isLoading,
    runSorting,
    runGenerating,
    clearSorting,
  };
};
