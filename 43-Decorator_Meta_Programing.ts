/*
 **  Meta Programing with Decorator
 **
 **
 */

function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hooEl = document.getElementById(hookId);
    const p = new constructor();
    if (hooEl) {
      hooEl.innerHTML = template;
      hooEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@withTemplate('<h1> My Person Object </h1>', 'app')
export class MetaProgramingPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}
