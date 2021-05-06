export default abstract class Player {
    name: string; // constructor param - required
    winCount: number = 0; // not contructor param
    constructor(name: string) {
      this.name = name;
    }
    // abstract methods have 'abstract' keyword and semicolon.
    abstract pickSymbol(): string;
  }
  