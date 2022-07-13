export class TsObject{
  create(){
    const person: object = {
      name : 'Maximilian',
      age: 30
    }

    // console.log('[TS Object]', persion.nickName); //Type Error
    console.log('[TS Object]', person.name);
    
  }

  constructor(){
    this.create();
  }
}