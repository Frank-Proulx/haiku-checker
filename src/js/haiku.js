export const removeExtraVowels = (originalWord,newWord,counter) => {
  if (counter === originalWord.length) {
    return newWord;
  } else {
    if (counter - 1 >= 0) {
      if ((checkVowel(originalWord[counter]) != checkVowel(originalWord[counter - 1])  || ((checkVowel(originalWord[counter]) === false && checkVowel(originalWord[counter - 1]) === false)))) {
        return removeExtraVowels(originalWord, newWord + originalWord[counter], counter + 1);
      } else if (checkVowel(originalWord[counter]) && checkVowel(originalWord[counter - 1])) {
        return removeExtraVowels(originalWord, newWord, counter+1);
      }
    } else if (counter - 1 < 0) {
      return removeExtraVowels(originalWord, newWord + originalWord[counter], counter + 1);
    }
  }
//Should work now
};

export const checkVowel = (input) => {
  const vowelList = ['a','e','i','o','u'];
  return vowelList.includes(input.toLowerCase());
};

const noDoubleVowels = input => removeExtraVowels(input, "", 0);

export const countSyllable = (input) => {
  const noVowelInput = noDoubleVowels(input);
  const bob = (bobin, pointer) => {
    if (pointer === bobin.length) {
      return 0;
    }
    if (checkVowel(bobin[pointer])) {
      return bob(bobin,pointer + 1) + 1;
    } else {
      return bob(bobin,pointer + 1);
    }
  };
  return bob(noVowelInput, 0);
};

const fiveSyllables = input => { return countSyllable(input) === 5; };
const sevenSyllables = input => { return countSyllable(input) === 7; };


export const pattern = (inputArray, count) => {
  if (count === inputArray.length) {
    return true;
  }
  if (count % 2 === 0 && fiveSyllables(inputArray[count])) {
    return pattern(inputArray, count + 1);
  } else if (count % 2 != 0 && sevenSyllables(inputArray[count])){
    return pattern(inputArray, count + 1);
  } else {
    return false;
  }
};


// const newString = noDoubleVowels("the fork in the road");
// const countVowels = newString.split("");
// const wordArray = countVowels.filter(e => e === "a" || e === "e" || e === "i" ||e === "o"||e==="u");
// console.log(wordArray.length);

// input.split('').map((e)=>{
//   if(checkVowel(e)){
//     return 1;
//   }else{
//     return 0;
//   }
// }).reduce(add, 0);


// Divide between two middle consonants. ...
// Usually divide before a single middle consonant. ...
// Divide before the consonant before an "-le" syllable. ...
// Divide off any compound words, prefixes, suffixes and roots which have vowel sounds.
