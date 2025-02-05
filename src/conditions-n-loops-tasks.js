/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = a;
  if (b > maxNumber) {
    maxNumber = b;
  }
  if (c > maxNumber) {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }
  if (queen.y === king.y) {
    return true;
  }
  let xQueen = queen.x + 1;
  let yQueen = queen.y + 1;
  const boardSize = 8;
  while (xQueen <= boardSize && yQueen <= boardSize) {
    if (xQueen === king.x && yQueen === king.y) {
      return true;
    }
    xQueen += 1;
    yQueen += 1;
  }
  xQueen = queen.x - 1;
  yQueen = queen.y - 1;
  while (xQueen >= 1 && yQueen >= 1) {
    if (xQueen === king.x && yQueen === king.y) {
      return true;
    }
    xQueen -= 1;
    yQueen -= 1;
  }
  xQueen = queen.x + 1;
  yQueen = queen.y - 1;
  while (xQueen <= boardSize && yQueen >= 1) {
    if (xQueen === king.x && yQueen === king.y) {
      return true;
    }
    xQueen += 1;
    yQueen -= 1;
  }
  xQueen = queen.x - 1;
  yQueen = queen.y + 1;
  while (xQueen >= 1 && yQueen <= boardSize) {
    if (xQueen === king.x && yQueen === king.y) {
      return true;
    }
    xQueen -= 1;
    yQueen += 1;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let flag = a > 0 && b > 0 && c > 0;
  if (!flag) {
    return false;
  }
  flag = a + b > c && a + c > b && c + b > a;
  if (!flag) {
    return false;
  }
  flag = a === b || a === c || b === c;
  if (!flag) {
    return false;
  }
  return true;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumber = '';
  let number = num;
  const tens = Math.trunc(number / 10);
  for (let i = 0; i < tens; i += 1) {
    romanNumber += 'X';
  }
  number %= 10;
  switch (number) {
    case 9: {
      romanNumber += 'IX';
      break;
    }
    case 4: {
      romanNumber += 'IV';
      break;
    }
    default: {
      const fives = Math.trunc(number / 5);
      if (fives) {
        romanNumber += 'V';
      }
      number %= 5;
      for (let i = 0; i < number; i += 1) {
        romanNumber += 'I';
      }
    }
  }

  return romanNumber;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let numberToString = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    switch (char) {
      case '-': {
        numberToString += 'minus';
        break;
      }
      case '0': {
        numberToString += 'zero';
        break;
      }
      case '1': {
        numberToString += 'one';
        break;
      }
      case '2': {
        numberToString += 'two';
        break;
      }
      case '3': {
        numberToString += 'three';
        break;
      }
      case '4': {
        numberToString += 'four';
        break;
      }
      case '5': {
        numberToString += 'five';
        break;
      }
      case '6': {
        numberToString += 'six';
        break;
      }
      case '7': {
        numberToString += 'seven';
        break;
      }
      case '8': {
        numberToString += 'eight';
        break;
      }
      case '9': {
        numberToString += 'nine';
        break;
      }
      case '.': {
        numberToString += 'point';
        break;
      }
      case ',': {
        numberToString += 'point';
        break;
      }
      default: {
        break;
      }
    }
    if (i !== numberStr.length - 1) {
      numberToString += ' ';
    }
  }
  return numberToString;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isPalindromeFlag = true;
  for (let i = 0; i < str.length / 2; i += 1) {
    isPalindromeFlag = str[i] === str[str.length - 1 - i];
    if (!isPalindromeFlag) {
      break;
    }
  }
  return isPalindromeFlag;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let lastDigit = num % 10;
  let numberToCheck = num;
  do {
    if (lastDigit === digit) {
      return true;
    }
    numberToCheck = Math.floor(numberToCheck / 10);
    lastDigit = numberToCheck % 10;
  } while (numberToCheck > 0);
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balanceIndex = -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      balanceIndex = i;
      break;
    }
  }
  return balanceIndex;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let number = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  while (number <= size * size) {
    for (let i = left; i <= right; i += 1) {
      arr[top][i] = number;
      number += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      arr[i][right] = number;
      number += 1;
    }
    right -= 1;
    for (let i = right; i >= left; i -= 1) {
      arr[bottom][i] = number;
      number += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      arr[i][left] = number;
      number += 1;
    }
    left += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotateNewMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    rotateNewMatrix[i] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      rotateNewMatrix[i][j] = matrix[matrix.length - 1 - j][i];
    }
  }
  const m = matrix;
  for (let i = 0; i < rotateNewMatrix.length; i += 1) {
    for (let j = 0; j < rotateNewMatrix[0].length; j += 1) {
      m[i][j] = rotateNewMatrix[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  let arrLength = arr.length;
  const tempArr = arr;
  while (arrLength) {
    for (let i = 0; i < arrLength - 1; i += 1) {
      if (tempArr[i] > tempArr[i + 1]) {
        const temp = tempArr[i];
        tempArr[i] = tempArr[i + 1];
        tempArr[i + 1] = temp;
      }
    }
    arrLength -= 1;
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let string = str;
  let maxIterations = 0;
  for (let i = 0; i < iterations; i += 1) {
    let shuffleString = '';
    for (let j = 0; j < str.length; j += 2) {
      shuffleString += string[j];
    }
    for (let j = 1; j < str.length; j += 2) {
      shuffleString += string[j];
    }
    string = shuffleString;
    if (string === str) {
      maxIterations = i + 1;
      break;
    }
  }
  for (let i = 0; i < iterations % maxIterations; i += 1) {
    let shuffleString = '';
    for (let j = 0; j < str.length; j += 2) {
      shuffleString += string[j];
    }
    for (let j = 1; j < str.length; j += 2) {
      shuffleString += string[j];
    }
    string = shuffleString;
    if (string === str) {
      maxIterations = i;
      break;
    }
  }
  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numArray = [];
  let num = number;
  while (num > 0) {
    numArray.push(num % 10);
    num = Math.trunc(num / 10);
  }
  numArray = numArray.reverse();
  let maxDigitIndex = 0;
  for (let i = numArray.length - 1; i > 0; i -= 1) {
    if (numArray[i - 1] < numArray[i]) {
      maxDigitIndex = i;
      break;
    }
  }
  if (maxDigitIndex === 0) {
    return number;
  }
  const rightArray = [];
  for (let i = maxDigitIndex; i < numArray.length; i += 1) {
    rightArray.push(numArray[i]);
  }
  rightArray.sort((a, b) => a - b);
  const digitToChange = numArray[maxDigitIndex - 1];
  let indexToChange = 0;
  for (let i = 0; i < rightArray.length; i += 1) {
    if (rightArray[i] > digitToChange) {
      indexToChange = i;
      break;
    }
  }
  const temp = digitToChange;
  numArray[maxDigitIndex - 1] = rightArray[indexToChange];
  rightArray[indexToChange] = temp;
  for (let i = 0; i < rightArray.length; i += 1) {
    numArray[maxDigitIndex + i] = rightArray[i];
  }
  return Number.parseInt(numArray.join(''), 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
