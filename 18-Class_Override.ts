class ClassOverRideDepartment {
  constructor(
    private id: string,
    public name: string,
    private employee: string[],
    protected employees: string[]
  ) {}

  addEmployee(employee: string) {
    this.employee.push(employee);
  }
}

class ExtendClassOverideDepartment extends ClassOverRideDepartment {
  constructor(id: string) {
    super(id, 'IT', [], []);
  }

  // overriding addEmployee function
  addEmployee(name: string) {
    // over ride logic below:
    if (!name) {
      return;
    }

    /*
     **
     ** `this.employee` Can't be use in `extends` class
     **
     */
    // this.employee = []; // Error

    this.employees.push(name); // ok `protected` can be use in `extends` classes
  }
}
