// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

interface IStorage {
  items: string[];
  getItems(): string[];
  addItem(item: string): void;
  removeItem(item: string): void;
}

class Storage implements IStorage {
  public items: string[];
  public item: string;

  constructor(items: string[]) {
    this.items = items;
    this.item = '';
  }

  getItems() {
    return this.items;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    let itemIndex;

    if (this.items.includes(item)) {
      itemIndex = this.items.indexOf(item);
      this.items.splice(itemIndex, 1);
    }
  }
}

const storage: IStorage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

export {};
