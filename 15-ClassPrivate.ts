class ClassPrivateDepartment {
  name: string;

  private employee: string[];
  //  employee: string [];

  constructor(n: string) {
    this.name = n;
    this.describe();
  }

  describe(this: Department) {
    console.log('name:', this.name);
  }

  addEmployee(n: string) {
    this.employee.push(n);
  }
}

const accounting15 = new ClassPrivateDepartment('Accounting');
accounting15.describe(); // work normally

accounting15.addEmployee('Max'); // ok
// accounting15.employee[2] // Error
