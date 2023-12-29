console.log("============================================================");
function stringHandsOn() {
    

var givenString = `    Hey you are doing good, keep it up    `;
console.log(`1--> Given String is :`, givenString);

console.log("============================================================");

var count = givenString;
console.log("2--> Calculated lenght of given string is :" , count.length);

console.log("============================================================");

var string = givenString;
console.log(`3--> Before Trim lenght of string is :` ,  string.length);
var trimResult= string.trim();
console.log(`  -> After Trim lenght of string is :` , trimResult.length);

console.log("============================================================");

var result = string.length - trimResult.length;
console.log(`4--> Total No of extra spaces removed from given string is :` , result);

console.log("============================================================");

var char = trimResult
var result = char.charAt(0);
var result2 = char.charAt(char.length-1);
console.log("5--> first character is :" , result , "and" ,  "last character is :" , result2);

console.log("============================================================");

var word = trimResult;
result = word.split(" ");


console.log(`6--> Total words in the string is: ${result.length} `);

console.log("============================================================");

var text = trimResult;
console.log(`7--> Index of word "good" is :` , text.indexOf("good") );

console.log("============================================================");


var string = trimResult;
console.log("8--> Substring given string from value 22");
console.log("   1--> Using Substring :" , string.substring(22));


console.log("   2--> Using Slice :" , string.slice(22));

console.log("============================================================");



var end = trimResult;
var isAvailable = end.endsWith("up");
console.log(`9--> Is trimed string is ends with word "up"  => ${isAvailable}`);

console.log("============================================================");
var start = trimResult;
var isAvailable = start.startsWith("Hey");
console.log(`10--> Is trimed string is starts with word "Hey"  => ${isAvailable}`);















}
stringHandsOn();