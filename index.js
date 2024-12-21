// / *******charAt vs squarebrackett******

// const str = "crio do";
// console.log(str.charAt(7));

// const str1 = "crio do";
// console.log(str1[7]);

// ***Replace****
// let str = "I like coffee";
// let newstr = str.replace("coffee", "tea");
// console.log(newstr);

// *********************************Shallowcopy and deepcopy*******************************

// const original = {
//   a: 1,
//   b: 2,
//   c: { ac: 5, bc: 6 },
//   d: function () {
//     console.log("Hello");
//   },
// };
// ******Mere Copy**********
// const copy = original;
// copy.c.ac = 10;
// console.log(original);

// ********Shallowcopy********

// const shallowcopy = { ...original };
// shallowcopy.b = 120;
// shallowcopy.c.ac = 20;
// console.log(original);

// *******deepcopy**********
// const deepcopy = JSON.parse(JSON.stringify(original))
// deepcopy.c.ac = 100;
// deepcopy.d=1000;
// console.log(original)

// *******************************Promise***************************************************

//callback hell example
// createorder(cart, function (orderid) {
//   proceedopayment(orderid, function (paymentinfo) {
//     showordersummary(paymentinfo, function (paymentinfo) {
//       updatewalletbalence(paymentinfo);
//     });
//   });
// });

// //how to remove the above inversion of control issue
// //below is the promise chaining
// createorder(cart).then(function (orderid) {
//   return proceedopayment(orderid).then(function (paymentinfo) {
//     return showordersummary(paymentinfo).then(function (paymentinfo) {
//       return updatewalletbalence(paymentinfo);
//     });
//   });
// });

// eg>>>
// const API = "https://jsonplaceholder.typicode.com/posts";
// const posts = fetch(API);
// console.log(posts);
// posts.then(function (data) {
//   console.log(data.json());
// });

// *********************************Promise construction*********************************************

//in above example, createorder(cart) is a promise we called, now how to create the promise?

// const cart = ["shoes", "pants", "Kurtha"];
// const promise = createOrder(cart);
// promise
//   .then(function (orderid) {
//     console.log(orderid);
//     // proceedtopayment();
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// ///now, producing promise / creation of promise

// function validatecart(cart) {
//   return false; //change this to false to see error and vice versa
// }
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validatecart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderid = "123"; //getiing the order id by calling or how so ever
//     if (orderid) {
//       setTimeout(() => {
//         resolve(orderid);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// Promise construction

// ***************************************Promise perfect example**********************
// const cart = ["kurtha", "shoes", "tie"];
// const promise = createcart(cart);
// promise
//   .then(function (orderid) {
//     console.log(orderid);
//     return orderid; //we return orderid here which will go down to proceedtopay;
//   })
//   .then(function (orderid) {
//     //orderid passed here whoch was returned from above
//     return proceedtopay(orderid);
//   })
//   .then(function (payinfo) {
//     console.log(payinfo);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function createcart(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validcart) {
//       const err = new Error("Invalid cart");
//       reject(err);
//     } else {
//       const idfromdatabase = "12345";
//       if (idfromdatabase) {
//         setTimeout(() => {
//           resolve(idfromdatabase);
//         }, 5000);
//       }
//     }
//   });
//   return pr;
// }

// function proceedtopay(orderid) {
//   //   const pr = new Promise(function (resolve, reject) {
//   //     setTimeout(() => {
//   //       resolve("Payment successful");
//   //     }, 5000);
//   //   });
//   //   return pr;
//   //instead of above we can also just do like;
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Payment successful");
//     }, 5000);
//   });
// }

// function validcart(cart) {
//   if (cart.length > 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ***********************************************************************************************************************
// Concept

// // 1. Shallow copy Vs deep copy
// /*In case of non primitive data types,When a copy is made just by assigning the old eg. object to new object,
// it just makes a copy and the copy also refers
// to the original object. Here we can see that when a employee is assigned to newemployee and changes made to
// new employee ename, the original object with the same
// key also changes*/

// let employee = {
//   eid: "E102",
//   ename: "Jack",
//   eaddress: "New York",
//   salary: 50000,
// };

// let newemployee = employee;
// console.log(newemployee);
// console.log(employee);

// newemployee.ename = "Ashish";
// console.log(employee);
// console.log(newemployee);

// 2. Deep Copy that is a remedy to above problem of shallow copy
/*Deep copy makes a copy of all type members of the old object, allocates a seperate location for that object and 
assigns the copied members to that oject. 
This way the original is intact*/

// let employee = {
//   eid: "E102",
//   ename: "Jack",
//   eaddress: "New York",
//   salary: 50000,
// };
// console.log(employee);

// let newemployee = JSON.parse(JSON.stringify(employee));
// newemployee.ename = "Ashish";
// newemployee.salary = 2500000;
// console.log(employee);
// console.log(newemployee);

/*However, Json.parse and json.stringify that first transforms object to json string and then back to 
javascript object is not effective when the object is large
 and contains other methods*/

//  3.Lodash to Deep copy
/*Lodash is a library. It has a method called cloneDeep. This overcomes the limits of JSON.parse(json.stringify())*/
// const lodash = require("lodash");
// let employee = {
//   eid: "E102",
//   ename: "Jack",
//   eaddress: "New York",
//   salary: 50000,
//   details: function () {
//     return "Employee Name: " + this.ename + "-->Salary: " + this.salary;
//   },
// };
// let deepcopy = cloneDeep(employee);
// console.log(employee);
// console.log(deepcopy);
// deepcopy.eid = "E109";
// deepcopy.salary = 2500000;
// deepcopy.details = function () {
//   return "Employee Name: " + this.eid + "Salary: " + this.salary;
// };

// console.log(employee);
// console.log(deepcopy);

// 3rd concept
// Pass by value and Pass by Reference
/* In js, pass by value and pass by reference is the understanding of how variable behave when they are modified with in the functions*/

//   1.// Pass by Value
/* Primitive data types are pass by value which means changes made in function doesnot change the original variable. eg. changes done inside passbyvalue 
function does not effect  the values of a and b*/

// function Passbyvalue(a, b) {
//   let tmp;
//   tmp = b;
//   b = a;
//   a = tmp;
//   console.log(a, b);
// }
// a = 1;
// b = 2;
// Passbyvalue(1, 2);
// console.log(a, b);

// 2.Pass by Reference
/* Incase of pass by reference, function is called directly by passing the reference of variable as argument. so, changing the value in function changes the original value*/
// function PassbyReference(obj) {
//   let tmp = obj.a;
//   obj.a = obj.b;
//   obj.b = tmp;

//   console.log(obj.a, obj.b);
// }

// let obj = { a: 10, b: 20 };

// PassbyReference(obj);
// console.log(obj.a, obj.b);

// ******Find params/extract params*********

// const url = new URL("http://example.com/user/123");
// console.log(url);
// // Assuming the URL pattern is like: /user/{id}
// const pathSegments = url.pathname.split("/"); // Splits the path into segments
// console.log(pathSegments)
// const userId = pathSegments[2]; // Extracts the ID from the URL
// console.log("User ID:", userId);
// *********************************************************************************************

// 3rd concept: De-structuring an object

// Destructuring an Object

// let obj = { a: 10, b: 20, name: "Ram" };
// const { a, name } = obj;
// /*Variable name shall be same as key name while destructuring*/
// console.log(a);
// console.log(name);

// 4th concept

/*Updating object*/

// let obj = { a: 10, b: 20, name: "Ram" };
// obj["animal"] = "cat";
// // obj.animal = "cat";
// console.log(obj);
// console.log(obj["animal"]);

// *Imp
//Destructuring an Array
// const arr1 = [1, 2, 3, 4, 5];
// const [first1, second2, , , fifth] = arr1;
// console.log(first1, second2, fifth);

//Hoiesting

// console.log(printNumbers());
// function printNumbers() {
//   console.log(anyvar);
//   var anyvar = "Crio";
//   console.log(anyvar);
// }
// printNumbers();
// console.log(printNumbers());

// *******2nd example*****
// console.log(greet());
// function greet() {
//   console.log("Hello");
// }
//it returns undefined coz no return statement inside function, see below example to understand;

// console.log(greet());
// function greet() {
//   return "Hello";
// }

// 5.>>concept
// let obj = [1, 2, 3];
// console.log(typeof obj);
// console.log(Array.isArray(obj));
