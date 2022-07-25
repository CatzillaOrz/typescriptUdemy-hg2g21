/*
 **  [Decorator]:
 **  [√] Decorator execute when your class is defined;
 **  [√] Don't need to instantiate your class at all;
 **  [√] Decorator runs when javascript finds your [class constructor] funtion definition, not when **  you use that constructor function to instantiate an object
 **
 */

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class ClassDecoratorPerson {
  name = 'Max';

  constructor() {
    console.log('Createing person object');
  }
}

const pers = new ClassDecoratorPerson();
