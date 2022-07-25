/*
 **  [Class Decorator] return A [class]
 **   [√] return a new constructor
 **   [√] replace old one
 **   [√] return class extends original class
 **   [√] add new funtionality
 **   [*] keep in mind: the new constructor should only be rendered to the dom if I really instantiate my object ! and not all the time when this original decorator function is executed which happens as sonn as we defin the class!
 **   [√] [enhancement fix type error]: return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) 
 */
function GenericwithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        // TODO:
        const hooEl = document.getElementById(hookId);
        if (hooEl) {
          hooEl.innerHTML = template;
          hooEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@GenericwithTemplate('<h1> My Person Object </h1>', 'app')
export class GenericMetaProgramingPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

export function run47() {
  new GenericMetaProgramingPerson();
}
