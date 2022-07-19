class ClassShortHandInit {
  // private id: string;
  // private name: string;

  constructor(
    private id: string,
    public name: string,
    private readonly key: string
  ) {
    // this.id = id;
    // this.name = name;
  }

  describe() {
    // this.key = 'some xxx'; // Error: readonly Could only be Initialized in new constructor like: new Deparmetn('idxxx', 'name', 'key xxxx')
    console.log('Deparment:' + `${this.id}, ${this.name}`);
  }
}
