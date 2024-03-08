1. Print odd numbers in an array

let oddNumbers1 = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
oddNumbers1();


2. Convert all the strings to title caps in a string array

let titleCaps1 = () => {
    let array = ["apple", "banana", "orange"];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
};

titleCaps1();


 3. Sum of all numbers in an array

let sumOfNumbers1 = () => {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum:", sum);
};

sumOfNumbers1();


 4. Return all the prime numbers in an array

let funPrimeNumbers1 = () => {
    let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 19];
    let primeNumbers = [];
    let i = 0;

    while (i < Arr.length) {
        let num = Arr[i];
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
        }

        i++;
    }

    console.log(primeNumbers);
}
funPrimeNumbers1();

5. Return all the palindromes in an array

const palindromes1 = (function (words) {
    const palindromeArr = [];
    for (let i = 0; i < words.length; i++) {
        let w = words[i];
        let n = w.slice(0, Math.floor(w.length / 2));
        let j = w.slice(Math.ceil(w.length / 2), w.length);
        if (n == j.split('').reverse().join('')) {
            palindromeArr.push(w);
        }
    }
    return palindromeArr;
})(["level", "hello", "radar", "world"]);

console.log("Palindromes:", palindromes1);