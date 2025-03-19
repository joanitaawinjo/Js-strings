let str = "extravaganza";
let lastFour = str.slice(-4);
console.log(lastFour);

let food = "The quick fox jumped over the lazy dog";
let newFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(newFood); 

let story = "The quick brown fox jumps over the lazy dog";
function countOccurrences(text, word) {
    return text.toLowerCase().split(word.toLowerCase()).length - 1;
}

console.log(countOccurrences(story, "the"));   
console.log(countOccurrences(story, "brown")); 

let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let firstWord = string1.includes("are") ? "are" : "not found";
let secondWord = string2.includes("sitting") ? "sitting" : "not found";
console.log(firstWord); 
console.log(secondWord); 

let a = "wonderful".toUpperCase();
let b = "amazing".toLowerCase();
let x = "UndERneath".toLowerCase();
let c = "A wonderful world".split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()). join(" ");
console.log(b);  
console.log(a);  
console.log(c);  