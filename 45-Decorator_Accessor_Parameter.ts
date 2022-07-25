/*
 **  [Accessor & Parameter Decortaor]
 **   [Accessor: setter]:
 **     [√]: args1: prototype(instance excess) | constructor(static one)
 **     [√]: args2: [name] of the accessor
 **     [√]: args3: [PropertyDescriptor(a type built into typescript)]
 **
 **
 **   [Method Decorator]:
 **     [√]: args1: prototype | constructor
 **     [√]: args2: [name] of the method
 **     [√]: args3: [descriptor]
 **
 **   [Parameter Decorator]:
 **     [√]: args1: prototype | constructor
 **     [√]: args2: [name] of funtion
 **     [√]: args3: [position: number] number of this parameter
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

function MethodDecoratorLog3(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target, propertyName, descriptor);
}

function ParameterDecoratorLog4(
  target: any,
  propertyName: string | Symbol,
  position: number
) {
  console.log('Parameter decorator!');
  console.log(target, propertyName, position);
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

  @MethodDecoratorLog3
  getPriceWithTax(@ParameterDecoratorLog4 tax: number) {
    return this.price * (1 + tax);
  }
}

export function run45() {
  new MetaProgramingPerson();
}
