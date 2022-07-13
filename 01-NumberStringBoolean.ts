export class NumberStringBoolean {
  create() {
    this.add(1, 2, true, 'reselt is:');
  }

  add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }

  run() {
    this.create();
  }
}
