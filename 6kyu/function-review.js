//function greet(name) {
//    console.log("Hello, " + name + "!");
//}
//greet("Allice");
/*
can directly put the argument in the function call >>> greet("Alice") Alice being the argument
*/

//another way to run function as soon as it is written
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");
