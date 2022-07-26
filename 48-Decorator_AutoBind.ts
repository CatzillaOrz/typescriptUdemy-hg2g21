/*
 **  Another Decorator Return
 **   [√]: vanilla JS property controls etc.
 **   Example: Auto bind Decorator
 **
 **   [√] always set `this` keyword to the object:
 **   [√] Access to original function (PropertyDescriptor.value)
 **   [√] set up a new adjusted descroptor(for return latter)
 **   [√]
 **
 */

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class DecoratorAutoBindPrint {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

export function run48() {
  const p = new DecoratorAutoBindPrint();
  const button = document.getElementById('appbtn')!;

  button.addEventListener('click', p.showMessage);
}
