export enum BarType {
  BAR_UNUSED,
  BAR_VISUALIZED,
  BAR_GENERATED,
}

export class Bar {
  public barType: BarType;

  constructor(public value: number, public index: number) {
    this.barType = BarType.BAR_GENERATED;
  }

  setBarValue(value: number): void {
    this.value = value;
  }

  setBarType(value: BarType): void {
    this.barType = value;
  }
}
