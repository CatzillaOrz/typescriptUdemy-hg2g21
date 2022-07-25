/*
 **
 **
 **  [Generic function]
 **
 **
 */

function merge<T extends object, U extends object | string | number>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });

console.log(mergeObj);
