/*
 **  [Generic Class]
 **  [√] Class<T>
 **  [√] <T> as number | string | boolan
 **  [X] <T> as Object | Array
 */

class GenericClassStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

/*
 **  user age version 1
 **
 **
 */

const useAsString = new GenericClassStorage<string>();

useAsString.addItem('Hello');
useAsString.addItem('World!');

useAsString.getItems();

const useAsUnmber = new GenericClassStorage<number>();

useAsUnmber.addItem(1);
useAsUnmber.addItem(109);

useAsUnmber.getItems();
