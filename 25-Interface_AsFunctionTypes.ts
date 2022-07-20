/*
 **    [interface] used to define type structure
 **   [type] used to define functionsTypes
 */

type AddFun = (a: number, b: number) => number;

let add: AddFun;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
