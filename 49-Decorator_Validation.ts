/*
 **  [Decorator Validation]
 **   [√]
 **
 */

class DecoratorValidationCourse {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registerdValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    [propName]: ['positive'];
  }
}

function validate(obj: object) {}

export function run49() {
  const courseForm = document.querySelector('#formgroup');
  courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title')! as HTMLInputElement;
    const priceEl = document.getElementById('price')! as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCouse = new DecoratorValidationCourse(title, price);

    console.log(createCouse);
  });
}
