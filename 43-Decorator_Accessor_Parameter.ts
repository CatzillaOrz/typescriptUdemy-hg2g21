/*
 **  [Accessor & Parameter Decortaor]
 **
 **
 */

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class MetaProgramingPerson {
  @Log
  title: string;
  private _price: number;
}
