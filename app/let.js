export let letPractice = function() {



//-----------------------------------------------------------------------------
//LET STATEMENT
// 'let' allows to declare variable limited to scope, statement or expression.

// function varTest() {
//     var x = 2;                          // x declared in function
//     if (true){
//         console.log(x);                 // x is still accessible in the if
//         var x = 3;                      // redeclaring the x overrides the declaration in function
//         console.log(x);
//     }
//     console.log(x);                     // it shows the value assigned inside the if outside of if
// }
// varTest();
//
// function letTest() {
//     let y = 4;                          // y declared in the function
//     if (true){
//         console.log(y);                 // y is not accessible inside the if returns undefined
//         let y =5;                       // y is declared for inside the if
//         console.log(y);
//     }
//     console.log(y);                     // this y is the y declared in the fucntion not in the if
// }
// letTest();




// for (var i = 0; i < 3; i++){          // i is declared for the for statement
//     console.log(i);
// }
// console.log(i);                       // i is available outside for

// for (let j = 0; j < 3; j++){          // j is declared for the for statement
//     console.log(j);
// }
// console.log(j);                       // j is not available outside for


//  ANOTHER EXAMPLE WOULD BE LIKE
//FOLLOWING SECTION CANNOT BE TESTED HERE WITH BABEL DUE TO THE STRICT MODE APPLIED DURING THE TRANSPILATION.
//CHECK IT ON A BROWSER ENVIRONMENT

// var k = 'I am k global';
// let l = 'I am l not global';
// console.log(this.k);             //I am k global
// console.log(this.l);             //undefined


// With BABEL FOLLOWING BLOCK WORKS BUT IN BROWSER ENVIRONMENT IT IS ReferenceError
// {
//     console.log(m)
//     let m = 9
// }


// TESTING OUT MY KNOWLEDGE ON PROTOTYPING OBJECTS
// function Person(first, last, age, sex){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.sex = sex;
// }
// Person.prototype.nationality = "Bangladeshi";
//
// var birani = new Person("Rubel", "Hossain", 28, "M");
// Person.prototype.fullName = function(){
//     console.log(this.firstName +" "+ this.lastName);
// };
// console.log(birani);
// birani.nationality = "UGANDA";
// birani.fullName();
// console.log(birani);


//NOW TESTING LET WITH OBJECT PROTOTYPES

// {
//     var someConstructor;
//     let privateScope = {};
//
//     someConstructor = function () {
//         this.someProperty = "foo";
//         privateScope.hiddenProperty = "bar";
//     };
//
//     someConstructor.prototype.showPublic = function () {
//         console.log(this.someProperty);
//     };
//
//     someConstructor.prototype.showHidden = function () {
//         console.log(privateScope.hiddenProperty);
//     };
//
// }
//
// var myObj = new someConstructor();
//
// myObj.showPublic();
// myObj.showHidden();
//
// console.log(myObj.someProperty);
// console.log(myObj.hiddenProperty); // not accessible as 'privateScope' is limited inside the previous block

//-----------------------------------------------------------------------------

};