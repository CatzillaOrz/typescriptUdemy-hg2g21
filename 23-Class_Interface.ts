/*
 ** [interface] like a blueprint of class as type
 **
 **
 */

interface ClassInteracePerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

export function run23() {
  let user1: ClassInteracePerson;
  user1 = {
    name: 'Max',
    age: 21,
    greet(phrase: string) {
      console.log(phrase);
    },
  };
}
