export class myTuplesEnum {
  constructor() {
    this.create();
  }

  create() {}

  enum() {
    enum ROle {
      ADMIN = 0,
      READ_ONLY = '100',
      AUTHOR = 200,
    }
  }

  tuples() {
    const person: {
      name: string;
      age: number;
      hobbies: string[];
      role: [number, string];
    } = {
      name: 'Maximilian',
      age: 30,
      hobbies: ['Sports', 'Cooking'],
      role: [2, 'author'],
    };

    person.role.push('admin');

    // Type Error
    // person.role[1] = 10;
  }
}
