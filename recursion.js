/* 
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input.
 That number should be the number of sheep you have. 
 The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence 
*/
function countingSheep(num) {
  if(num === 0) {
    return 'All sheep jumped over the fence';
  }
  return `${num}: Another sheep jumps over the fence\n` + 
  countingSheep(num - 1);
}

console.log(countingSheep(3));

/*
2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer as a base, and 
another integer as an exponent. The function returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0
*/
function powerCalculator(base, exp) {
  if(exp < 0) {
    return 'exponent should be >= 0';
  }

  if(exp === 0) {
    return 1;
  }

  return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(20, -2));

/*
3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
*/
function reverseString(str) {
  if(str.length === 1) {
    return str;
  }
  return str.slice(-1).concat(reverseString(str.slice(0, -1)));
}


console.log(reverseString('abdu hussen jemal'));

/*
4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle.
 The nth triangular number is the number of dots composing a triangle with n dots on a side, 
 and is equal to the sum of the n natural numbers from 1 to n. 
 This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/
function triangleNumber(num) {
  if(num === 1) {
    return 1;
  }
  
  return num + triangleNumber(num - 1);
}

console.log(triangleNumber(9));

/*
5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]
*/
function stringSplitter(string,separator){
  if(string.length === 1 && string[0] !== separator) {
    return string[0];
  }
  if(string[0] === separator)
    return ', '.concat(stringSplitter(string.slice(1),separator));

  if(string.length === 0)
    return '';
  
  return string[0].concat(stringSplitter(string.slice(1),separator));
}

console.log(stringSplitter('02/20/2020', '/'));

/*
6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/
function fibo(num) {
  if(num === 1) {
    return 1;
  }

  if(num === 2) {
    return 1;
  }
  
  return fibo(num - 1) + fibo(num - 2);

}

function fibonacci(num) {
  var str = '1';
  for(let i = 2; i <= num; i++){
    
    str = str.concat(`, ${fibo(i)}`);
  }
  console.log(str);
}

fibonacci(7);

/*
7. Factorial
Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and 1. 
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/
function factorial(num) {
  if(num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));