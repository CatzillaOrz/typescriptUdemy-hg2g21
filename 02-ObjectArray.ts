export class TsObjectArray {
  constructor() {
    this.create();
  }

  create() {}

  myObject() {
    const person: { name: string; age: number } = {
      name: 'Maximilian',
      age: 30,
    };

    //Type Error
    // console.log('[TS Object]', persion.nickName);

    console.log('[TS Object]', person.name);
  }

  myArray() {
    let favoriteActivities: string[]; // array[]
    favoriteActivities = ['sports', 'cooking'];
  }
}
