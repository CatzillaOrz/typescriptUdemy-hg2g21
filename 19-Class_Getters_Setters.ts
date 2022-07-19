class ClassGettersSettersDepartment {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: ClassGettersSettersDepartment) {
    console.log('Department:' + `${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
  }
}

class ExtendClassGettersSettersDepartment extends ClassGettersSettersDepartment {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please input some value!');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

export function run19() {
  let employee = new ExtendClassGettersSettersDepartment('id01', []);
  // employee.lastReport = '' // Error
  employee.addReport('hello');
  // employee.addReport('world');
  console.log(employee.mostRecentReport);
  employee.mostRecentReport = 'World!';
  console.log(employee.mostRecentReport);
}
