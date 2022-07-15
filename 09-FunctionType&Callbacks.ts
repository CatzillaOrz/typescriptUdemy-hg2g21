export class FunctionTypeCallbacks {
  constructor() {}

  addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  run() {
    this.addAndHandle(1, 2, (result) => {
      console.log(result);
    });
  }
}
