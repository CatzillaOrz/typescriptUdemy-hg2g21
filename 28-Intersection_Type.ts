type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  strarDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'max',
  privileges: ['create-server'],
  strarDate: new Date(),
};

// basic

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
