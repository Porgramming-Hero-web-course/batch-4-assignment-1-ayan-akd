"use strict";
{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const getYear = new Date().getFullYear();
            const carAge = getYear - this.year;
            console.log(`${carAge} (assuming current year is ${getYear})`);
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}
