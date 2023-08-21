/*===================================== Reverse a array =============================================*/

// Method-1 - Using inbuilt method
var arr1 = ["Apple", "Ball", "Cat", 1, 2, 3, 4, 5]

function revArr(arr) {
    return arr.reverse();
}

console.log("1) Reverse using inbuilt method :- ", revArr(arr1));

// Method-2 - Without using inbuilt method OR using for loop
function reverseArr(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
    return arr;
}

console.log("2) Reverse without using inbuilt method:- ", reverseArr(arr1));

// Method-3 - Using for loop

function reveArr(arr) {
    let rev = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}

console.log("3) Reverse using for loop :- ", reveArr(arr1));

// Method-4 - Using reduce method

let revArray = arr1.reduce((emptyArr, curr) => [curr, ...emptyArr], [])
console.log("4) Reverse using reduce :- ", revArray);

// Method-5 - Using map method
const reversedArray = arr1.map((_, index, array) => array[array.length - 1 - index]);
console.log("5) Reverse using map :- ", reversedArray);

// Method-6 - Using recursion
function reveArr(arr, start, end) {
    if (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reveArr(arr, start + 1, end - 1)
    }
}
reveArr(arr1, 0, arr1.length - 1)
console.log("6) Reverse array using recursion :- ", arr1);


/*===================================== Reverse a string =============================================*/

const str = "Hello, How are you?"

// Method-1 - Using inbuilt methods
function revStr(str) {
    return str.split('').reverse().join('')
}
console.log("7) Reverse a string using inbuilt method :- ", revStr(str));

// Method-2 - Without using inbuilt method
function revString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log("8) Reverse a string without using inbuilt method :- ", revString(str));

// Method-3 - using recursion
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
console.log("9) Reverse a string using recursion :- ", reverseString("Hello, How are you?"));

// Method-4 - in place
function reverseStr(str) {
    let rev = [...str];
    let start = 0;
    let end = rev.length - 1;
    while (start < end) {
        let temp = rev[start];
        rev[start++] = rev[end];
        rev[end--] = temp;
    }
    return rev.join('');
}
console.log("10) Reverse string in-place :- ", reverseStr(str));

/* ========================== Check a given string/integer is palindrome or not ================== */

// Method-1 - using for loop
const strr = 125;

function isPalindrome(strr) {
    if (typeof strr !== "string") {
        strr = strr.toString();
    }
    let isPalindrome = true;
    let len = strr.length;
    for (let i = 0; i < len / 2; i++) {
        if (strr[i] !== strr[len - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        return true
    } else {
        return false
    }
}

isPalindrome(strr);

/* ========================== Write a program to return length of longest palindrome in the given string ================== */

const str2 = "aabad"

function lngestSubstring(str) {
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let bag = ""
        for (let j = i; j < str.length; j++) {
            bag += str[j];
            if (bag.length > max && isPalindrome(bag)) {
                max = bag.length;
            }
        }
    }
    return max;
}
console.log("11) Length of longest palindrome in string :- ", lngestSubstring(str2));

/* ========================== Write a program to return longest palindromic word in the given sentence ================== */

const str1 = "aba madam bba"

function longestSubstring(str) {
    str = str.split(' ');
    let len = 0;
    let word = ""
    for (let i = 0; i < str.length - 1; i++) {
        if (isPalindrome(str[i]) && (str[i]).length > len) {
            len = (str[i]).length;
            word = str[i];
        }
    }
    return word
}
console.log("12) Longest palindrmic word :- ", longestSubstring(str1));

/* =============================  Remove duplicates in a given array  ====================================================== */

// Method-1 - Using filter method
const duplicateArr = [1, 2, 3, 1, 2, 3, "Apple", "Bag", "Bag", "Apple"];
const filtered = duplicateArr.filter((value, index) => {
    duplicateArr.indexOf(value) === index
})

// Method-2 - Using includes()
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log("13) Removig duplicate elements from array :- ", removeDuplicates([1, 2, 3, 1, 2, 3, "Apple", "Bag", "Bag", "Apple"]));

// Method-3 - Without using inbuilt method
function removeDuplicate(arr) {
    let result = [];
    let idx = 0;
    let tmp = {};                   // store elements as keys and their occurrences as values
    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        }
    }
    return result;
}
console.log("14) Remove duplicates from array :- ", removeDuplicate([1, 2, 3, 1, 2, 3, "Apple", "Bag", "Bag", "Apple"]));

/* ====================================  Print Duplicate Characters in String  =====================================================*/

function dupChar(str) {
    let charCount = {};
    let duplicates = [];
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
        if (charCount[str[i]] === 2) {
            duplicates.push(str[i])
        }
    }
    return duplicates;
}
console.log("15) Print Duplicates in string :- ", dupChar("Hello"));

/* ==================================== check if two strings are anagrams of each other ============================== */

function checkAnagrams(str1, str2) {
    let charCount = {}
    if (str1.length !== str2.length) {
        return false
    }

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true
}

console.log("16) Two strings are anagram? :- ", checkAnagrams("listen", "silent"));

/* ============================================== find all the permutations of a string =================================================== */

const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
        .split('')
        .reduce(
            (acc, currentValue, i) =>
                acc.concat(
                    stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
                        val => currentValue + val
                    )
                ),
            []
        );
};
console.log("17) All the permutations of a string :- ", stringPermutations('abc'));

/* ============================================     ==============================*/