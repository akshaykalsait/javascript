console.log("==================Step 1==================");

function squareOfWordLenght(str1) {
    
    let result = str1.length;
    
    console.log("Given String is :" , str1);
    console.log(`Lenght of string is : ${result}`);
    
    

    var square = result * result;
    console.log(`Square of lenght is : ${square}` );  

    console.log("---------------------------------------");

    

    

    
    
}
squareOfWordLenght('JavaScript');
squareOfWordLenght('Google Chrome');
squareOfWordLenght('Developer Smart')


console.log("==================Step 2==================");
function developer() {

    var value = "I am Angular Developer";
    console.log("Given string is :" , value);

    var res = value.length;
    console.log(`Length of given string is : ${res}`);
    
    
    console.log("-------------------------------------------------");
    var word = value;
    result = word.split(" ");
    console.log(`Total words in string are : ${result.length}`);

    

    var div = res / result.length;
    console.log(`Division of string length and total no. of words in string is : ${div}`);
    console.log("-------------------------------------------------------------");

    var len = res;
    console.log(`Length of given string is : ${len} `);

    var multi = res * result.length;
    console.log(`Multiplication of string length and total no. of words in string is : ${multi}`);    








    
}
developer();