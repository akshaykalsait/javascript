

console.log(`***************************************Step 1***********************************************\n`);

console.log(`-----------------------------Find Palindrome Using Ternary Operator----------------------------------`);


function isPalindrome (str){
    let result = str.split('').reverse().join('') == str ? "True" :  "false"
    console.log(`Given String "${str}" is Palindrome ? ---> ${result}\n`);
}
   isPalindrome("madam");
   isPalindrome("dad");
   isPalindrome("hello");



console.log(`-----------------------------Find Palindrome Using If - Else-----------------------------------------`);

   function palindrome (string){
    //let resultValue = "";
    if (string.split("").reverse().join("") === string) {
      returnValue =  `Given String "${string}" is Palindrome ? ---> True` 
        
    } else {
    returnValue =  `Given String "${string}" is Palindrome ? ---> False \n`   
    }
    return returnValue;
   }
    var result = palindrome("madam");
    console.log(result);
   
    var result = palindrome("dad");
    console.log(result);

    var result = palindrome("hello");
    console.log(result);
   
   
console.log(`***************************************Step 2***********************************************\n`);

console.log(`-----------------------------Find "Anagram" Strings-----------------------------------------`);


function anagram (str1 , str2){
 




   if  (str1.replace().toLowerCase().split("").sort().join("") == str2.replace().toLowerCase().split("").sort().join("")) {
      returnValue  = `Given Strings "${str1}" and "${str2}" are Anagram ? ---> True \n` ;
   } else {
      returnValue =  `Given Strings "${str1}" and "${str2}" are Anagram ? ---> False \n`;
   }
   return returnValue;


   
}
var result = anagram("Silent" , "Listen");
console.log(result);

 var result = anagram("Hello" , "World");
 console.log(result);

 var result = anagram("Such" , "much");
 console.log(result);

 console.log(`***************************************  END  ***********************************************`);
