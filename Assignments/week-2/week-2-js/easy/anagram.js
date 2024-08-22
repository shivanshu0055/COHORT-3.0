/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.size!=str2.size) return false;
  str1=str1.toLowerCase()
  // console.log(str1);
  str2=str2.toLowerCase()
  let c1=str1.split("")
  let c2=str2.split("")
  c1.sort()
  c2.sort()
  for(let i=0;i<c1.length;i++){
    if(c1[i]!=c2[i]) return false;
  }
  return true
}

console.log(isAnagram("hello",'world'))
module.exports = isAnagram;
