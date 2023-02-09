// Problem 1: Let’s play a mind game

function mindGame(number) {
 if (typeof number != "number") {
  return "Please enter any number";
 } else {
  return (number * 3 + 10) / 2 - 5;
 }
}
mindGame();

// ===========================

// Problem 2: Finding even or odd

function evenOdd(myString) {
 if (typeof myString != "string") {
  return "Please enter any string";
 } else {
  if (myString.length % 2 == 0) {
   return "even";
  } else {
   return "odd";
  }
 }
}
evenOdd();

// ===========================

// Problem 3: Is Less or Greater than seven

function isLGSeven(number) {
 const subtraction = number - 7;
 if (typeof number != "number") {
  return "Please enter any number";
 } else {
  if (subtraction < 7) {
   return subtraction;
  } else {
   return number * 2;
  }
 }
}
isLGSeven();

// ==========================

// Problem 4: Finding Bad data

function findingBadData(numbers) {
 let badData = 0;
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
   badData++;
  }
 }
 return badData;
}
findingBadData([]);

// ==========================

// Problem 5: Convert your gems into diamond

function gemsToDiamond(number1, number2, number3) {
 let friendOne = 21;
 let friendTwo = 32;
 let friendThree = 43;

 if (
  typeof number1 != "number" ||
  typeof number2 != "number" ||
  typeof number3 != "number"
 ) {
  return "Please enter any number.";
 } else {
  let numberOfDiamond =
   friendOne * number1 + friendTwo * number2 + friendThree * number3;
  if (numberOfDiamond > 1000 * 2) {
   return numberOfDiamond - 2000;
  } else {
   return numberOfDiamond;
  }
 }
}
gemsToDiamond();
