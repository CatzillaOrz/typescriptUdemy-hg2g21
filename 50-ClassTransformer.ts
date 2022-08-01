/*
 **  useage of
 **   [class-validator]
 */

import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
export class ClassTransformerProduct {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(title: string, price: number) {}

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}

/*
 **  useage of
 **  [reflect-metadata]
 **  [class-transformer]
 **   [class-validator]
 */
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';

import { validate } from 'class-validator';

export function run50() {
  const products = [
    { tilte: 'apple', price: '29.99' },
    { tilte: 'books', price: '1.99' },
  ];

  const list = plainToInstance(ClassTransformerProduct, products);
  list.forEach((e) => console.log(e.getInformation()));

  /* useage [validate] */

  const newProd = new ClassTransformerProduct('', 2.22);
  validate(newProd).then((error) => {
    if (error.length > 0) {
      console.log('Error Found:');
      console.log(error);
    }
  });
}
