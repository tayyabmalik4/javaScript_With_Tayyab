console.log("this is the function tutorial in javascript")

let name = "tayyab";
let name1 = "junaid";
let name2 = "zahid";
let name3 = "shary";
let greetText = "Good Morning"; 
console.log(name," is a AI Developer");
console.log(name1," is a MERN Developer");
console.log(name2," is a FrontEnd Developer");
console.log(name3," is a Also Mern Developer");

// the same thing is in the function
function greet(name , greetText){
    console.log(greetText, " ", name)
    console.log(name, "is very Delevoper");
}
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

function checked(a,b){
    if (a>b){
        // console.log("A is greater than B");
        return console.log("A is greater than B");
    }
    else{
        console.log("B is Greater");    }
}
checked(5,3)