interface Params {
  maxSpeed: number;
  price: number;
}

interface CarParams {
  maxSpeed: number;
  price: number;
  speed: number;
  isOn: boolean;
  distance: number;
  _price: number;
}

interface ICar {
  maxSpeed: number;
  price: number;
  speed: number;
  isOn: boolean;
  distance: number;
  _price: number;

  turnOn(): void;
  turnOff(): void;
  accelerate(value: number): void;
  decelerate(value: number): void;
  drive(hours: number): void;
}

class Car implements ICar {
  static getSpecs(car: CarParams) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    );
  }

  public maxSpeed: number;
  public speed: number;
  public isOn: boolean;
  public distance: number;
  public _price: number;

  constructor({ maxSpeed, price }: Params) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value: number) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value: number) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours: number) {
    if (this.isOn === true) {
      this.distance = hours * this.speed;
    }
  }
}

const mustang: ICar = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

export {};
