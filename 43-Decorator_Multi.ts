/*
 **  Adding [Multi Decorator]
 **   [√]: use more than one in Class | Property
 **   [√]: [Decorator] excute [bottom] to [top]
 **   [√]: [Decorator funciton] excute [top] to [bottom]
 **
 */

function MultiLogger(logString: string) {
  console.log('[1]MultiLogger Factory starting...');

  return function (constructor: Function) {
    console.log(`[4]` + logString);
    console.log(`[5]` + constructor);
  };
}

function MultiWithTemplate(template: string, hoodId: string) {
  console.log('[2]MultiWithTemplate factory starting...');
  return function (constructor: any) {
    console.log('[3]Rendering template done...');
  };
}

@MultiLogger('LOG-Decorator')
@MultiWithTemplate('', '')
export class MultiDecoratorPerson {
  name: 'Max';
  constructor() {}
}
