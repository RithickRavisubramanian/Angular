// 1) Filter only  prime numbers from a list of value


function FilterArray(filter, array) {
    const resultArray = [];
    for (let x of array) {
      if (filter(x)) {
        resultArray.push(x);
      }
    }
    return resultArray;
  }
  
  const result = FilterArray(function(x) {
    if (x === 1) {
      return false;
    }
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }, [1, 2, 3, 4, 5, 6, 7,8,9,10,11]);
  
  console.log(result);  // output -[2, 3, 5, 7, 11]



// 2) Convert each string in a list to uppercase case



const strList = ["rithick", "soorya", "shyam", "bhargav", "athif"];

const uppercaseList = strList.map(function(str) {
  return str.toUpperCase();
});

console.log(uppercaseList); // output -[ 'RITHICK', 'SOORYA', 'SHYAM', 'BHARGAV', 'ATHIF' ]



//3) Get the longest string in the list of string

const stringList = ["Rithick", "Ram", "Anu", "Ajay","vishnu","Janu"];

const longestString = stringList.reduce(function(longest, current) {
  return longest.length > current.length ? longest : current;
});

console.log(longestString); // output- Rithick


 

// 4) Get sum of all the length of the string in the list

const strgList = ["rithick", "madhu", "shyam", "soorya","priya"];

const totalLength = strgList.reduce(function(sum, current) {
  return sum + current.length;
}, 0);

console.log(totalLength);  // output- 28



// 5)Filter only the student who got more than 70% percent

 
 const studentList = [
    { name: "Rithick", grade: 90 },
    { name: "soorya", grade: 65 },
    { name: "shyam", grade: 80 },
    { name: "athif", grade: 60 },
    { name: "bhargav",grade: 50 }
  ];
  
  const passingStudents = studentList.filter(function(student) {
    return student.grade > 70;
  });
  
  console.log(passingStudents); 

  // Output: [ { name: 'Rithick', grade: 90 }, { name: 'shyam', grade: 80 } ]



// 6) convert all negative numbers in a list to positive numbers

const numbers = [-6, 3, -2, 1, -8, -9, 13, -26];

const positiveNumbers = numbers.map(num => {
  if(num < 0) {
    return -num;
  }
  return num;
});

console.log(positiveNumbers); // output - [6, 3, 2, 1, 8, 13, 26, ]
  