/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.split('').sort()
  let string2 = str2.split('').sort()
  console.log(string1)
  console.log(string2)

  if(string1.toString() === string2.toString()){
    return true;
  }
  else return false;
}
console.log(isAnagram('spar','rasp'))
console.log(isAnagram('spar','ssar'))


module.exports = isAnagram;
