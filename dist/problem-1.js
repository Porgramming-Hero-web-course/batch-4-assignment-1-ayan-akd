"use strict";
{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (array) => {
        let sum = 0;
        array.forEach((element) => {
            sum += element;
        });
        console.log(sum);
        return sum;
    };
    sumArray([1, 2, 3, 4, 5]);
}
