/*
 **   [abstrict] class
 **
 */
abstract class ClassAbstractDepartment {
  abstract description: string;
  constructor(
    protected id: string,
    public name: string,
    protected emplyees: string[]
  ) {}

  /*
   **   [abstrict] function
   **   - Shound't [impliment] but Define [return type]:
   **   - void | string | number |  ...
   */
  abstract describe(): void;
  static createEmployee(name: string) {
    return { name: name };
  }
}

class ExtendClassAbstractDepartment extends ClassAbstractDepartment {
  description: string;
  constructor(id: string, name: string, admins: string[]) {
    super(id, name, []);
  }
  /*
   ** [implement inherited abstract member ]
   **
   **
   */
  describe(): void {
    console.log(this.name);
  }
}
