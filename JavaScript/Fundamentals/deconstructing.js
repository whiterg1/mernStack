//Problem #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Predicted Outcome #1
//The console will print "Tesla" on one line and then "Mercedes" on the next.


//Problem #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//Predicted Outcome #2
//The program will return an error because there is no variable defined as name.
//There are two ways which we could get around this. One would be to add the object name infront of the variable we want. console.log(employee.name).
//That would return the name we are looking for. 
//The way that it is defined in this problem is the other way by using the curly braces and declaring a variable to store the information.
//In this case, the information is stored in otherName. If we removed console.log(name) from the above problem is would function properly.




//Problem #3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//Predicted Outcome #3
//The first print line will generate "12345", because the const has been declared as password globably outside of an object and can be called upon.
//The second will return undefined because the const has been declared but there is nothing defined as password inside of the object person.
//That means it cannot pull something that doesnt exist, therefore it returns undefined.

//Problem #4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//Predicted Outcome #4
//The first print line will return false because 2 does not equal 5.
//The second print line will return true because 2 and 2 equal one another.

//Problem #5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Predicted Outcome #5
//The first print line will return "value".
//The second print line will return "[1,5,1,8,3,3]".
//The third print line will return 1.
//The final print line will return 5.