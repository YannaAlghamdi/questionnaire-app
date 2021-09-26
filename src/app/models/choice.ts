export class Choice {
  private label: string;
  private value: string;
  private selected: boolean;

  public getLabel(): string { return this.label; }
  public withLabel(arg: string) { this.label = arg; return this; }

  public getValue(): string { return this.value; }
  public withValue(arg: string) { this.value = arg; return this; }

  public getSelected(): boolean { return this.selected; }
  public withSelected(arg: boolean) { this.selected = arg; return this; }
}
