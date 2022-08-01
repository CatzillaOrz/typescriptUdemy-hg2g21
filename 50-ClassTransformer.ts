export class ClassTransformerProduct {
  constructor(private title: string, private price: number) {}

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}

import 'reflect-metadata';
import { plainToClass, plainToInstance } from 'class-transformer';

export function run50() {
  const products = [
    { tilte: 'apple', price: '29.99' },
    { tilte: 'books', price: '1.99' },
  ];

  const list = plainToInstance(ClassTransformerProduct, products);
  list.forEach((e) => console.log(e.getInformation()));
}
