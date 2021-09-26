export class Model {
  private id?: number;
  private identifier: string;
  private description: string;

  public getId(): number { return this.id; }
  public withId(arg: number) { this.id = arg; return this; }

  public getIdentifier(): string { return this.identifier; }
  public withIdentifier(arg: string) { this.identifier = arg; return this; }

  public getDescription(): string { return this.description; }
  public withDescription(arg: string) { this.description = arg; return this; }
}
