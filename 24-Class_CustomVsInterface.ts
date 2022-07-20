/*
 **
 **   Don't use [type] instead of [interface]
 **   Why?
 */

interface Greetable {
  name: string;

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
  console.log(user1);
}
