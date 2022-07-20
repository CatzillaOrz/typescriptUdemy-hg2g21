/*
 **
 **   Don't use [type] instead of [interface]
 **
 */

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class ClassImplimentGreetable implements Greetable {
  name: string;
  greet(phrase: string): void {
    throw new Error('Method not implemented.');
  }
}

export function run24() {
  let user1: Greetable | ClassImplimentGreetable;
  user1 = {
    name: 'Max',
    greet(phrase: string) {
      console.log(phrase);
    },
  };

  console.log(user1);
}
