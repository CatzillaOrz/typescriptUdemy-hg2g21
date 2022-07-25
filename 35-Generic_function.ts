/*
 **
 **
 **  [Generic function]
 **   [√] <T,U>
 **   [√] <T extends object, U>
 **   [√] <T,U extends string | number>
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

/*
 **  [Generic Funtion type usage]:
 **  [√] <T extends InterfaceX>
 **  [√] return Type : [T, string]
 **
 */

interface Length {
  length: number;
}
export function countAndDescribe<T extends Length>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else {
    descriptionText = 'Got' + element.length + ' elements.';
  }

  return [element, descriptionText];
}
