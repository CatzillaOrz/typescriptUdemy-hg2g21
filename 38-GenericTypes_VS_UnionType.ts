/*
 **  [Union Types]:
 **   [√]: private data: string | number | boolan [Mixed]
 **   [Generic Types]:
 **   [√]: class DataStorage<T extends string | number | boolean> ; private data <T> [Only one of T]
 **
 */

class GenericTpyesVsUnitonTypeDataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return; // Object Array don't work
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}
