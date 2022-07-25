/*
 **  [Property Decorator]
 **   [√] two arg: [target: contructor funtion] & [property]
 **   [√] excute when [class definition is registered by javascript]
 **   [√] no need [reutrn funtion]
 **   [√] no need parameter when use @custom like:
 */

function PropertyDecoratorLog(target: any, propertyName: string | Symbol) {
  console.log('Property decorator excuted...');
  console.log(target, propertyName);
}

export class PropertyDecoratorProduct {
  @PropertyDecoratorLog
  title: string;

  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      new Error('Not a  number');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

export function run46() {
  new PropertyDecoratorProduct('DP_Title', 23);
}
