export class UnknowType {
  constructor() {}

  run() {
    let userInput: unknown;
    let userName: string;

    userInput = 5;
    userInput = 'Max';
    // userName = userInput // Type Error;
    if (typeof userInput === 'string') {
      userName = userInput;
    }
  }
}
