// console.log("N");
// console.log("A");
// console.log("R");
// console.log("E");
// console.log("S");
// console.log("H");


function sayMyName(){     // function defination
    console.log("N");     //function syntax....
    console.log("A");     //function syntax...
    console.log("R");     //function syntax...
    console.log("E");     //function syntax...
    console.log("S");     //function syntax
    console.log("H");
}

// sayMyName()   //function reference


function addTwoNumbers(number1, number2){     //this line of paranthisis bracket () is called variable paramiter
    console.log(number1 + number2);
    
}

// addTwoNumbers(3, 4)   // 7  // argument pass this parenthis () called parenthis bracket


function addTwoNumbers(number1, number2){     //this line of paranthisis bracket () is called variable paramiter
    console.log(number1 + number2);
    
}

// // addTwoNumbers(3, "a")   //3a   // if you this put a number and a string pass then value show first add the number and then string value show ex. 3 and "4"  value as 34 not  add number type


function addTwoNumbers(number1, number2){     //this line of paranthisis bracket () is called variable paramiter
    console.log(number1 + number2);
    
}
// 
// addTwoNumbers(3, null)   // 3  // if you pass a number and a null then show first number you pass 


// function addTwoNumbers(number1, number2){     //this line of paranthisis bracket () is called variable paramiter
//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
     return number1 + number2
}


const result = addTwoNumbers(3, 4)  
// console.log("Result:", result);
 

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("naresh"))

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("")) //if you pass empty string then show : just logged in 

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // if you not pass then value then :undefined just logged in


// another method you know about if, if-else function to sloved this 
function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter a username");
        return   //if not show the  (return `${username} just logged in)`this line
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())



//another method to chick value pass or not 
function loginUserMessage(username) {
    if (!username) {
        console.log("please enter a username");
        return   //if not show the  (return `${username} just logged in)`this line
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())

