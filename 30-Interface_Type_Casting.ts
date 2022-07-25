/*
 **
 **  [Type casting]
 **
 **
 **
 */

/* Mighht conflit with react.js */
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')
);

userInputElement.value = 'Hi there!';

/* version 2 */

const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'hi there!';

/* use [!] after `document.getElementById('user-input')`  means not null */
