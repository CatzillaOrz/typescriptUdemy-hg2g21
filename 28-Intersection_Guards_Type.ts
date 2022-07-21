/*
 ** [intersection ]basic use in [type]
 **
 **
 **
 */

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
 **   use type [Guards] in basic types
 **   if(typeof xx === xxxtype || xx === xxxtype)
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

/*
 ** use [Guards] in class
 ** [√] instanceof
 ** [√] 'xProperty' in Object
 **
 **
 */

class Car {
  constructor() {}

  drive() {
    console.log('Driving ...');
  }
}
class Truck {
  constructor() {}

  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1); // new Car be used
useVehicle(v2); // new Truck be used as the same
