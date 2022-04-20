export enum BarType {
  BAR_UNUSED,
  BAR_VISUALIZED,
}

export class Bar {
  public barType: BarType;

  constructor(public value: number, public index: number) {
    this.barType = BarType.BAR_UNUSED;
  }

  setBarValue(value: number): void {
    this.value = value;
  }

  setBarType(value: BarType): void {
    this.barType = value;
  }
}
