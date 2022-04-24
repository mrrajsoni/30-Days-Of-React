// 1 Declare an empty array

const emptyArraY = [];

// 2 Declare an array with more than 5 number of elements

const arrayFiveNumb = [1, 2, 3, 5, 6];

// 3 Find the length of your array

console.log(arrayFiveNumb.length);

// 4 Get the first item, the middle item and the last item of the array

console.log(arrayFiveNumb[0]);
console.log(arrayFiveNumb[2]);
console.log(arrayFiveNumb[4]);

// 5Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ["Wolly", 4, [6, 9], { a: 4, b: 6 }, "Raj", 1996];
console.log(mixedDataTypes.length);

// 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7 Print the array using console.log()

console.log(itCompanies);

// 8 Print the number of companies in the array

console.log(itCompanies.length);

// 9 Print the first company, middle and last company

console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 10 Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11 Change each company name to uppercase one by one and print them out

itCompanies[0] = "FACEBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";

// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. (NOT SURE)

const extraSentence = ["are big IT companies"];
const addTwoArray = itCompanies.concat(extraSentence);
const arrayToString = addTwoArray.toString();
console.log("Array sentence" + arrayToString);

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const companyExists = itCompanies.indexOf("FACEBOOK");

companyExists !== -1
  ? console.log("The company exists")
  : console.log("The company does not exists");

// 14 Filter out companies which have more than one 'o' without the filter method - PENDING

// 15 Sort the array using sort() method

const sortCompanyArray = itCompanies.sort();
console.log("Company Sorting" + sortCompanyArray);

// 16 Reverse the array using reverse() method

const reverseCompanyArray = itCompanies.reverse();
console.log("Company Reverse" + reverseCompanyArray);

// 17 Slice out the first 3 companies from the array

const sliceCompanyArrayFirst = itCompanies.slice(0, 3);
console.log("Company first 3 remove" + sliceCompanyArrayFirst);

// 18 Slice out the last 3 companies from the array

const sliceCompanyArrayLast = itCompanies.slice(-1, -3);
console.log("Company last 3 remove" + sliceCompanyArrayLast);

// 19 Slice out the middle IT company or companies from the array

const sliceCompanyArrayMiddle = itCompanies.slice(2, 4);
console.log("Company middle 2 remove" + sliceCompanyArrayMiddle);

// 20 Remove the first IT company from the array

const removeFirstItCompany = itCompanies.shift();
console.log("Company first remove" + removeFirstItCompany);

// 21 Remove the middle IT company or companies from the array

const removeMiddleItCompany = itCompanies.splice(3, 1);
console.log("Company middle remove" + removeMiddleItCompany);

// 22 Remove the last IT company from the array

const removeLastCompany = itCompanies.pop();
console.log("Company last remove" + removeLastCompany);

// 23 Remove all IT companies

const removeAllCompany = itCompanies.slice();
console.log("Company all remove" + removeAllCompany);
