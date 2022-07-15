export class FunctionAsType {
  constructor() {}

  add(n1: number, n2: number): number {
    return n1 + n2;
  }

  run() {
    // let combineValue: Function;
    // let combineValue: () => number ;
    let combineValue: (a: number, b: number) => number;
    combineValue = this.add;
  }
}
