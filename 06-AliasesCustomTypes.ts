/*
 ** Define [aliases custom types]
 **
 **
 **
 */
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

export class AliasesCustomTypes {
  constructor() {}

  combine(
    input1: Combinable,
    input2: number | string,
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    return result;
  }

  run() {
    this.combine(2, 3, 'as-number');
    this.combine(2, 3, 'as-text');
  }
}
