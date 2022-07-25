/*
 **
 ** [Index] in Interface properties
 **  [√] don't need which property name
 **  [√] don't need how many properties
 **
 **
 */

interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  emal: 'Not a valid email!',
};
