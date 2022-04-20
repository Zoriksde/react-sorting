import { useCallback, useEffect, useState } from "react";
import { Bar } from "../strategies";

interface SortingHookArgs {
  size: number;
  min: number;
  max: number;
}

// Custom hook which creates initial sorting array
export const useSorting = ({ size, min, max }: SortingHookArgs) => {
  const [array, setArray] = useState<Bar[]>([]);

  // Initializes array of bars
  const initArray = useCallback((): void => {
    const newArray: Bar[] = [];
    for (let element = 0; element < size; element++)
      newArray.push(new Bar(0, element));
    setArray(newArray);
  }, [size]);

  // Creates random generated values
  const createRandomEntries = useCallback((): void => {
    setArray((prevArray) => {
      const updatedArray = [...prevArray];

      for (let element = 0; element < size; element++) {
        updatedArray[element].setBarValue(randomNumber(min, max));
      }

      return updatedArray;
    });
  }, [size, min, max]);

  const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    initArray();
    createRandomEntries();
  }, [initArray, createRandomEntries]);

  return [array];
};
