function productOfArray(arr) {
    if (arr.length === 0) 
      return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
  }

  function longestWordLength(words) {
    if (words.length === 0) 
      return 0;
    }
    const currentLength = words[0].length;
    const restLength = longestWordLength(words.slice(1));
    return currentLength > restLength ? currentLength : restLength;

    function everyOtherCharacter(str, index = 0) {
        if (index >= str.length) {
          return '';
        }
        return str[index] + everyOtherCharacter(str, index + 2);
      }

      function isPalindrome(str) {
        str = str.toLowerCase().replace(/[^a-z]/g, '');
        if (str.length <= 1) {
          return true;
        }
        return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
      }

      function findStringIndex(arr, target, index = 0) {
        if (index >= arr.length) {
          return -1;
        }
        if (arr[index] === target) {
          return index;
        }
        return findStringIndex(arr, target, index + 1);
      }

      function reverseString(str) {
        if (str === '') {
          return '';
        }
        return reverseString(str.slice(1)) + str[0];
      }