class ClassShortHandInit {
  // private id: string;
  // private name: string;

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe() {
    console.log('Deparment:' + `${this.id}, ${this.name}`);
  }
}
