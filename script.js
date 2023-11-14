/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const chars = s.split('');
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  let left = 0;
  let right = chars.length - 1;
  
  while (left < right) {
      while (left < right && !vowels.has(chars[left])) {
          left++;
      }
      while (left < right && !vowels.has(chars[right])) {
          right--;
      }
      if (left < right) {
          const temp = chars[left];
          chars[left] = chars[right];
          chars[right] = temp;
          
          left++;
          right--;
      }
  }
  return chars.join('');
};

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0 ? true : false;
};