export class UnionType {
  constructor() {}

  combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result;
    }
  }

  run() {
    this.combine(2, 3);
    this.combine('Max', 'Anna');
  }
}
