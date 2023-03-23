// All the code is for learning purpose
"use strict";


let hello  = async () => {
    
    // let x = {fname:["hemkant", "patel"], lname:"kushwaha", salary:280000, job:"Fullstack Engineer" }
    // let txt = `<h2>`;
    // let myNumber =  Number("4354");
    /*
    // Execute until Infinity and -Infinity
    let solve =  (myNumber) =>{
        while (myNumber != -Infinity) {
            myNumber = (myNumber * myNumber * myNumber);
        }
        return myNumber;
    }
    let ans = await solve(myNumber);
  

    */

   // This veriable is undefined why?
   // Undefined = variable is created but value is not assigned
   // Not definded = means variavle does bot exists yet.

   // or you are trying to access variable which is on another scope.

    
    // let x = 999999999999999;
    // let y = 99999956456549999999999n;
    // let y1 = BigInt(1234567890123456789012345);

    // let x = 5n;
    // let y = Number(x) / 2;

    // let x2 = undefined;
    // let num1 = 4567.5435436;
    // let y = 34 === 34;
    // let obj1 = {sl : 324234, fn : "fgdfg"};
    // let born = Number(new Date("2000-08-01"));
    // let now = Number(new Date("2023-03-23"));
    // let ods = 24*60*60;
    // let tdays = (23*12*30);
    // // my age in seconds = 714441600000

   
    let fun = () =>{
        return "Hello";
    }

    let obj = {gh: 45, jk: "gf"};
    // Arrays
    // Inside arrays can have arrays, objects, functions
    let arr = [1,2,3,4,[322,34,2],fun, obj ];
    // i can use for loop
    // for(let i = 0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }

    // i can also use arr.foreach() function
    arr.forEach(pr);
    function pr(val){
        console.log(val);
    }
    const elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = arr[4].length;
    
}

