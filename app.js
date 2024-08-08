//problem no:1
//how add all numbers in an array?
function sumArray(numbers) {
    var myarray = numbers;
    return myarray.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sumArray([10, 20, 30, 40, 50]));
console.log(sumArray([10, 5, 70, 98, 30]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([19, 45, 87, 35, 65]));
//problem no:2
//how reverse any string?
var myString = "hello";
var ArrayHasMade = myString.split('');
var reverseArray = ArrayHasMade.reverse();
var reverseString = reverseArray.join('');
console.log(reverseString);
myString = "world";
ArrayHasMade = myString.split('');
reverseArray = ArrayHasMade.reverse();
reverseString = reverseArray.join('');
console.log(reverseString);
myString = "i am mahnoor";
ArrayHasMade = myString.split('');
reverseArray = ArrayHasMade.reverse();
reverseString = reverseArray.join('');
console.log(reverseString);
