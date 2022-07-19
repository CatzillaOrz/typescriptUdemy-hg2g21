class Department {
  name: string;

  // private employee: string [];

  constructor(n: string) {
    this.name = n;
    this.describe();
  }

  describe(this: Department) {
    console.log('name:', this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe(); // work normally

const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // Error

const accountingCopy1 = { name: '', describe: accounting.describe };
accountingCopy1.describe(); // ok
