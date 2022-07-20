/*
 **
 **   [Static] class can be used without [new]
 **   like this: Math.PI
 **
 */

class ClassStaticDepartment {
  /* static function */
  static fiscalYear = 2020;
  constructor(
    private id: string,
    public name: string,
    protected employees: string[]
  ) {
    /* cant't access [static] property inside instance directly */
    // console.log(this.fiscalYear)   // Error
    console.log(ClassStaticDepartment.fiscalYear); // OK
  }

  /* static function */
  static createEmployee(name: string) {
    return { name: name };
  }
}

export function run20() {
  const employee = ClassStaticDepartment.createEmployee('Max');
  const fiscalYear = ClassStaticDepartment.fiscalYear;
  console.log(employee);
  console.log(fiscalYear);
  // new ClassStaticDepartment('Id', 'Max', []);
}
