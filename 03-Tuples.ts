export class myTuples {
  constructor() {
    this.create();
  }

  create() {
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
