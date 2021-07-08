//Given #1
console.log(hello);
var hello = "world";

//Expected Output #1
var hello = "world";
console.log(hello); //The code will output "world", due to the var being hoisted. 


//Given #2
var needle = "haystack";
test();
function test(){
    var needle = "magnet";
    console.log(needle);
}

//Expected Output #2
var needle = "haystack"; //This is declared and defined as a global variable.
function test(){  //The function will rise above the invocation but var needle will remain at the top inside of the function.
    var needle = "magnet";
    console.log(needle); //The function will log "magnet" because within the function needle is redefined as "magnet".
}
test(); //Finally the function will be invoked.


//Given #3
var brendan = "super cool";
function print(){
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan); 

//Expected output #3
var brendan = "super cool"; //The order will remain the same since the var is already declared at the top. 
function print(){
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan); //The output will be "super cool" because the function is never called.

//Given #4
var food = "chicken";
console.log(food);
eat();
function eat(){
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

//Expected outcome #4
var food = "chicken";
console.log(food); //This will output "chicken".
function eat(){//The function will hoist above its invocation 
    var food = "gone"; //The variable will hoist to the top of its scope within the function.
    food = "half-chicken";
    console.log(food); //This will output "half-chicken".
}
eat()

//Given #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Expected Output #5
var mean = function(){
    var food ="fish";
    food = "chicken";
    console.log(food); //Output will be chicken.
    console.log(food); //Output will be chicken.
}
mean(); // Will do nothing because their is not function named mean().
console.log(food); //Will give an error because food is not defined outside of the function.
console.log(food); //Will give an error because food is not defined outside of the function.





//Given #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Expected #6
var genre = "disco";
console.log(genre); //Output is "disco."
function rewind(){//The Function is never called.
    var genre = "r&b";
    genre = "rock";
    console.log(genre); 
    console.log(genre);
}
console.log(genre) //Output will be "disco"





//Given #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Expected #7
function learn(){
    var dojo = "burbank";
    dojo = "seattle"
    console.log(dojo);
    console.log(dojo);
}
dojo = "san jose"; //This will break the code because a variable has not been declared within the global scope.
console.log(dojo);
learn();

//Given #8(Bonus)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//Expected #8
console.log(makeDojo("Chicago", 65)); //Output will be Name:Chicago, Student:65, Hiring:True
console.log(makeDojo("Berkeley", 0)); //
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //this will crash the code because the syntax is wrong. This is attempting to assign a new value to an already defined constant. The variable which should have been used is dojo.hiring.
    }
    return dojo;
}


