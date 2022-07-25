/*
 **  [Accessor & Parameter Decortaor]
 **   [Accessor: setter]:
 **     [√]: args1: prototype(instance excess) | constructor(static one)
 **     [√]: args2: [name] of the accessor
 **     [√]: args3: [PropertyDescriptor(a type built into typescript)]
 **
 **
 **
 */

function AccessorDecoratorLog2(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Accesssor decorator!');
  console.log(target, propertyName, descriptor);
}

class MetaProgramingPerson {
  title: string;
  private _price: number;

  @AccessorDecoratorLog2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      new Error('Not a number');
    }
  }
}

export function run43(){
  new MetaProgramingPerson();
}