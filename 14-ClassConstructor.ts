class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
    this.run();
  }

  run() {
    console.log('name:', this.name);
  }
}
