/*
 **
 **   Don't use [type] instead of [interface]
 **   Why?
 **   You can't use:
 **   [x] [private]
 **   [x] [public]
 **   [x] [public]
 **   You can use:
 **   [√] [readonly]
 */

interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class ClassImplimentGreetable implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    throw new Error('Method not implemented.');
  }
}

export function run24() {
  let user1: Greetable | ClassImplimentGreetable;
  user1 = new ClassImplimentGreetable('Alice');
  // user1.name = 'Bob'; //Error Cannot assign to 'name' because it is a read-only property
  console.log(user1);
}
