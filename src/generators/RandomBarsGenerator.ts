import { ARRAY_SIZE, MAX_VALUE, MIN_VALUE } from "../components/Visualizer";
import { AbstractGenerator } from "./AbstractGenerator";

export class RandomBarsGenerator extends AbstractGenerator {
  constructor() {
    super("Random Bars");
  }

  generate(): number[] {
    const values: number[] = [];

    for (let element = 0; element < ARRAY_SIZE; element++) {
      values.push(this.randomNumber(MIN_VALUE, MAX_VALUE));
    }

    return values;
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
