// Palindrome Checker
function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const length = lowerCaseStr.length;
  if (length <= 1) return true;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (lowerCaseStr[i] !== lowerCaseStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome() {
  const inputPalindrome = document.getElementById("inputString").value;
  const resultPalindrome = document.getElementById("palindromeResult");
  if (isPalindrome(inputPalindrome)) {
    resultPalindrome.innerHTML = `<span class="success">"${inputPalindrome}" is a palindrome.</span>`;
  } else {
    resultPalindrome.innerHTML = `<span class="error">"${inputPalindrome}" is not a palindrome.</span>`;
  }
}

// Minimum and Maximum Numbers
function findMinMax() {
  const input = document.getElementById("numbersArray").value;
  const numbers = input.split(",").map(Number);
  const min = findMin(numbers);
  const max = findMax(numbers);
  const resultMinMax = document.getElementById("minMaxResult");
  resultMinMax.innerHTML = `Minimum Number: <span class="number">${min}</span>, Maximum Number: <span class="number">${max}</span>`;
}

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Missing Number
function findMissingNumber() {
  const input = document.getElementById("numberSeries").value;
  const numbers = input.split(",").map(Number);
  const missing = findMissing(numbers);
  const resultMissingNumber = document.getElementById("missingNumberResult");
  resultMissingNumber.innerHTML = `Missing Number: <span class="number">${missing}</span>`;
}

function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - sum;
}

document.getElementById("palindromeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  checkPalindrome();
});

document.getElementById("minMaxForm").addEventListener("submit", function(event) {
  event.preventDefault();
  findMinMax();
});

document.getElementById("missingNumberForm").addEventListener("submit", function(event) {
  event.preventDefault();
  findMissingNumber();
});
