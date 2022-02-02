import { removeExtraVowels } from './../src/js/haiku.js';
import { checkVowel } from './../src/js/haiku.js';
import {countSyllable} from './../src/js/haiku.js';

describe('removeExtraVowels', () => {

  test('should return rod if input is road ', () => {
    const input = "road";
    expect(removeExtraVowels(input,"",0)).toEqual("rod");
  });
});

describe('checkVowel', () => {
  test('should return true if character is vowel', () => {
    const input = "a";
    expect(checkVowel(input)).toEqual(true);
  });

  test('should return false if character is not a vowel', () => {
    const input = "f";
    expect(checkVowel(input)).toEqual(false);
  });

  test('should return true when pulling a vowel from a string via bracket notation', () => {
    const input = "Test";
    expect(checkVowel(input[1])).toEqual(true);
  });
});

describe('countSyllable', () => {
  test('should return number of vowels in a string', ()=> {
    expect(countSyllable("Peter piper picked a pack of pickeled peppers")).toEqual(14);
  });
});