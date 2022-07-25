/*
 **
 **
 **  [Generic function]
 **
 **
 */

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });

console.log(mergeObj);
