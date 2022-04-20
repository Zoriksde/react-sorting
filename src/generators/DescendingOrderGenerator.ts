import { AbstractGenerator } from "./AbstractGenerator";
import { RandomBarsGenerator } from "./RandomBarsGenerator";

export class DescendingOrderGenerator extends AbstractGenerator {
  private randomGenerator: RandomBarsGenerator;

  constructor() {
    super("Descending Order");
    this.randomGenerator = new RandomBarsGenerator();
  }

  generate(): number[] {
    const values = this.randomGenerator.generate();
    return values.sort((first, second) => second - first);
  }
}
