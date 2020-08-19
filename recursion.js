//1
function countingSheep(num) {
  if(num === 0) {
    return 'All sheep jumped over the fence';
  }
  return `${num}: Another sheep jumps over the fence\n` + 
  countingSheep(num - 1);
}

console.log(countingSheep(3));

//2
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

//3
function reverseString(str) {
  if(str.length === 1) {
    return str;
  }
  return str.slice(-1).concat(reverseString(str.slice(0, -1)));
}


console.log(reverseString('abdu hussen jemal'));

//4
function triangleNumber(num) {
  if(num === 1) {
    return 1;
  }
  
  return num + triangleNumber(num - 1);
}

console.log(triangleNumber(9));

//5
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

//6
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

function factorial(num) {
  if(num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));