{
  //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (string: string, word: string):number => {
    let count = 0;
    let sentence = string.toLowerCase().split(" ");
    sentence.forEach((element) => {
      if (element === word.toLowerCase()) {
        count++;
      }
    });
    console.log(count);
    return count;
  };

  countWordOccurrences("I love typescript", "Typescript");
}
