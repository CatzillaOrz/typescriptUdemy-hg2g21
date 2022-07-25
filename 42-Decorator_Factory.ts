/*
 **  Working with [Decorator Factories]
 **   [√] return a decorator funtion
 **   [√] config a decorator
 **
 */

function LoggerFactory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerFactory('LOGGING_PERSON')
class ClassDecoratorFactoryPerson {
  name = 'Max';

  constructor() {
    console.log('Createing person object');
  }
}

const persFactoryDecorator = new ClassDecoratorPerson();
