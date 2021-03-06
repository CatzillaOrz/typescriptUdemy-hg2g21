/*
 **    [interface] used to define type structure
 **   [type] used to define functionsTypes
 */

// better
type AddFun = (a: number, b: number) => number;

// also like this by using [interface]
interface AddFunCopy {
  (a: number, b: number): number;
}

let add: AddFun | AddFunCopy;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
