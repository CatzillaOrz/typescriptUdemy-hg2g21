/*
 **
 **  [keyof] constrain
 **
 **
 */

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log('value:' + obj[key]);
  return 'Value: ' + obj[key];
}

// extractAndConvert({}, 'name'); // Error
extractAndConvert({ name: 'Max' }, 'name'); // OK
