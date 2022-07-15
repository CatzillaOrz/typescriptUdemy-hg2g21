export class NeverType {
  constructor() {
    this.run();
  }

  run() {
    this.generateError('An error occurred!', 500);
  }

  generateError(message: string, code: number): never {
    console.log('hello!');

    throw { message: message, errorCode: code };

    console.log('world'); // will not work
  }
}
