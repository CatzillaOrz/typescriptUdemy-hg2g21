/*
 **  [Decorator Validation]
 **   [√]
 **
 */

/* Interface */
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}
/* Validator Config */
const registerdValidators: ValidatorConfig = {};

/* required Decorator for Property */
function Required(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

/* positive Decorator for Property */
function PositiveNumber(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

class DecoratorValidationCourse {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

function validate(obj: any) {
  const objValidatorConfig = registerdValidators[obj.constructor.name];
  if (!objValidatorConfig) return true;
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

export function run49() {
  const courseForm = document.querySelector('#formgroup');
  courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title')! as HTMLInputElement;
    const priceEl = document.getElementById('price')! as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCouse = new DecoratorValidationCourse(title, price);

    if (!validate(createCouse)) {
      alert('Please check input!');
      return;
    }

    console.log(createCouse);
  });
}
