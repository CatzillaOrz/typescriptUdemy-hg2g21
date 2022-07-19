/*
 **
 **   [Static] class can be used without [new]
 **   like this: Math.PI
 **
 */

class ClassStaticDepartment {
  constructor(
    private id: string,
    public name: string,
    protected employees: string[]
  ) {}

  static createEmployee(name: string) {
    return { name: name };
  }
}

export function run20() {
  const employee = ClassStaticDepartment.createEmployee('Max');
  console.log(employee);
}
