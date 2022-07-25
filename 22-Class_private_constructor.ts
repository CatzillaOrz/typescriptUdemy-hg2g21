class ClassPrivateConstructor {
  constructor() {}
}

class ExtendClassPrivateContructorSingleton extends ClassPrivateConstructor {
  /* [private static property] */
  private static instance: ExtendClassPrivateContructorSingleton;
  // [private constructor]
  private constructor(public name: string) {
    super();
  }

  // [static function]
  static getInstance() {
    if (ExtendClassPrivateContructorSingleton.instance) {
      return this.instance;
    }
    this.instance = new ExtendClassPrivateContructorSingleton('Alice');
    return this.instance;
  }
}

/*
 **   [Singleton]
 **    private constructor can't be initialized by [new]
 */

// let privateClass =  new ExtendClassPrivateContructorSingleton('Alice'); // Error

const singletonClass: ExtendClassPrivateContructorSingleton =
  ExtendClassPrivateContructorSingleton.getInstance();
