/*
 **  [√] ?. property
 **  [√] function
 **
 */
interface InterfaceOptional {
  readonly name: string;
  outputName?: string;

  hello?(num: number): void;
}

class TestInterfaceOptional implements InterfaceOptional {
  name: string;
  // outputName?: string;
  // hello?(num: number): void {
  //   console.log(this.hello)

  // }
}
