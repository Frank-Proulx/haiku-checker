export const removeExtraVowels = (originalWord,newWord,counter) => {
    if (counter === originalWord.length) {
    console.log(newWord);
    console.log(typeof newWord);
    return newWord;
  }else{
    if (counter - 1 >= 0) {
      if ((checkVowel(originalWord[counter]) != checkVowel(originalWord[counter - 1])||((checkVowel(originalWord[counter])===false&&checkVowel(originalWord[counter - 1])===false)))) {
        return removeExtraVowels(originalWord, newWord + originalWord[counter], counter + 1);
      } else if (checkVowel(originalWord[counter]) && checkVowel(originalWord[counter - 1])) {
        return removeExtraVowels(originalWord, newWord, counter+1);
      }
    } else if(counter - 1 < 0) {
      return removeExtraVowels(originalWord, newWord + originalWord[counter], counter + 1);
    }
  }
//Should work now
};

export const checkVowel = (input) => {
  const vowelList = ['a','e','i','o','u'];
  return vowelList.includes(input.toLowerCase());
};