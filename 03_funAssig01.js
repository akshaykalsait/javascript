console.log("=================== Step 1======================");
function job(params) {
    var result = "UI Developer";
   console.log("Designation :" , result);
}
job();

function package(params) {
    var result = "4.5" , k
console.log("packege :" , result);
}
package();




console.log("=================== Step 2======================");
function personalDetails(firstName , lastName , collegeName) {
    console.log("First Name is :" , firstName , "\nLast Name is :" , lastName , "\nCollege Name is :" , collegeName);
}
personalDetails("Akshay" , "Kalsait" , "I College");


console.log("=================== Step 3======================");

function swapValues(n1 , n2) {
    console.log("===Before Swap===");
    console.log( "n1:" , n1 );
    console.log("n2:" , n2);
    var temp =n1;
    n1 = n2;
    n2 = temp;
    console.log("===After Swap===");
    console.log("n1:" , n1);
    console.log("n2:" , n2);
    
}
swapValues("virat" , "anushka");
swapValues(1000 , 2000);


console.log("=================== Step 4======================");

function addThreeValues(n1 , n2 , n3) {
    var result = n1 + n2 +n3 ;
    console.log("Given Values Are -->" , "n1:" , n1 , "n2:" , n2 , "n3:" , n3);
    console.log("Addition is :" , result);
    
    
}
addThreeValues(10.23 , 600 , 40);
addThreeValues("Hello" , "Good" , "Morning");