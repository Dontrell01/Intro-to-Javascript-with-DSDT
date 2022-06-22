function validate() {
    a = window.prompt('Input a value')
    b = window.prompt('Input b value')
    c = window.prompt('Input c value')

    if(a == 0) {
        outputText = 'Cannot equal zero!';
    } else if (isNaN(a)) {
        outputText = 'Must be a number!';
    } else if (isNaN(b)) {
        outputText = 'Must be a number!';
    } else if (isNaN(c)) {
        outputText = 'Must be a number!';
    } else {

        var x1 = (-b - Math.sqrt(math.pow(b, 2) - 4 * a * c )) / (2 * a);
        outputText = 'For the equation ' + a + 'x / 2' + b + 'x' + c + ' = 0'
    }
} //2

function printArray(array) {
    console.log(array[0]);
    return array[0]
} //3

var date = new Date();

var n = date.toDateString();

var time = date.toLocaleTimeString();

console.log('date:', n);

console.log('time:',time); //4

function swap(x, y) {
    let a = prompt('Enter the first variable: ');
    let b = prompt('Enter the second variable: ');
    
    let temp;
    
    temp = a;
    a = b;
    b = temp;
    
    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
} //5

function reverseArray(numbersArray) {

    let leftIndex = 0;
    let rightIndex = numbersArray.length - 1;
  
    while (leftIndex < rightIndex) {
  
      let temp = numbersArray[leftIndex];
      numbersArray[leftIndex] = numbersArray[rightIndex];
      numbersArray[rightIndex] = temp;
  
      leftIndex++;
      rightIndex--;
    }
  } //6

  function capitalizeArray() {
    arrayToPass = [1, "Two", 3];
  
    unmodifiableFunction.apply(null, arrayToPass);
}

function unmodifiableFunction(a, b, c) {
    console.log("First value is: ", a);
    console.log("Second value is: ", b);
    console.log("Third value is: ", c); 
} //7

(function() {
    if (true) {
      function ok() {
        return 'true ok';
      }
    } else {
      function ok() {
        return 'false ok';
      }
    }
    console.log(typeof ok === 'undefined'); 
    console.log(ok()); 
  })(); //8

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  } //9

  function sumofNumbers(a, b) {
    return a + b;
  } //10

  function EvenOddSum(arr, n)
{
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++)
    {
     
        if (i % 2 == 0)
            even += arr[i];
        else
            odd += arr[i];
    }
} //11

function sumOfEven(num) {
    return num % 2 === 0;
} //12
  