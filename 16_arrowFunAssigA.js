
console.log(`==============================Step 1============================================`);
const string = ()=> {
    console.log(`"Good Morning, Today is Thursday"`);

}
    string();

    console.log(`==============================Step 2============================================`);

    const mutltiplication = (num1, num2, num3 =1)=>{
        result = num1 * num2 * num3;
        console.log(`Multiplication is ${result}`);

    }
    mutltiplication(5, 5, 2);
    mutltiplication(10, 4);

    console.log(`==============================Step 3============================================`);

    const add = (n1, n2, n3, n4, n5)=>{
        addition = n1+n2+n3+n4+n5;
        return addition;
        console.log(addition);

    }
    const res = add (100 ,100,200 ,349 ,756);
    console.log(`Addition of given numbers is : ${res}`);

    const str = add ("I am" ," learning" ," ES6" ," features" ," in depth");
    console.log(`Addition of given string is : ${str}`);