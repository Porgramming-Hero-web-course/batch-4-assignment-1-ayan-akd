{
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge(): number {
      const getYear = new Date().getFullYear();
      const carAge = getYear - this.year;
      console.log(`${carAge} (assuming current year is ${getYear})`);
      return carAge;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
}
