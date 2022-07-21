type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'max',
  privileges: ['create-server'],
  startDate: new Date(),
};

// basic

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/*
 **   use type Guards
 **  if(...)
 **
 **
 */

function add28(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name', emp.name);
  // console.log('privilage:', emp.privileges); //Error
  if ('privileges' in emp) {
    console.log('privilages:', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('startDate:', emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

printEmployeeInformation({ name: 'Manu', privileges: ['Unknown'] });
