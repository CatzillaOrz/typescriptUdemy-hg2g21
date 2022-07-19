class InheritaceDepartment {
  constructor(
    private id: string,
    public name: string,
    private readonly key: string
  ) {}

  describe() {
    console.log('Deparment:' + `${this.id}, ${this.name}`);
  }
}

class ExtendDepartment extends InheritaceDepartment {
  // constructor(){} // Error
  /*
   ** ExtendDepartment Shouldn't use constructor
   ** Should use super() function init like this:
   **
   */

  constructor(id: string, private admims: string[]) {
    super(id, 'IT', 'keys'); // must use super() before `this`
    this.admims = [];
  }
}
