{
  //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (array: number[]):number[] => {
    let newArray: number[] = [];
    array.forEach((element) => {
      if (newArray.includes(element) === false) {
        newArray.push(element);
      }
    });
    console.log(newArray);
    return newArray;
  };

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
