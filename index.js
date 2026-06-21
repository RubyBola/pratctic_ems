import{vat} from './module.js';
import{amount} from './module.js';
import{Payment} from './module.js';
import *as bookImport from './book.js'; // Importing the entire module as an object"
import {default as VEHICLE,noOfWheels} from './vehicle.js';
import{vat as vatfood,foodName,flour,toppings,price} from './food.js';

// import {invoices, payments} from './our_modules/index.js';
// import {invoices} from './our_modules/invoice.js';
// import {payments} from './our_modules/payment.js';


// import ("./our_modules/index.js").then((module) => {
//     // const { invoices, payments } = module;
//     console.log(module.invoices());
//     console.log(module.payments());
//   });
//   console.log("This is the main file.");
// console.log(invoices());
// console.log(payments());

// async function loadModule() {
//   const module = await import('./our_modules/index.js');  // Awaiting dynamic import or API call
//    console.log(module.invoices());
//    console.log(module.payments());
//    console.log(module);
//    console.log("This is the main file.");

// }
//  loadModule();

// const module = await import('./our_modules/index.js'); 
// console.log(module.invoices());
// console.log(module.payments());
// console.log(vat);
// console.log(amount());
// const payment = new Payment("John Doe");
// console.log(payment.fetchPayer());
// console.log(bookName); 
// console.log(value());

// const vehicle = new VEHICLE("Toyota");
// console.log(vehicle.fetchOwner());
// console.log(noOfWheels);

// console.log(import.meta.url);
// console.log(_filename);

// console.log(foodName);
// console.log(flour);
// console.log(toppings);
// console.log(price);
// console.log(vatfood);
// console.log(bookImport.bookName);
// console.log(bookImport.value());

//14. Destructuring
    // const array = ["value 1", "value 2", "value 3"];
    // const [result1, , result3] = array;
    // console.log(result3);
    // // const [result1, result2] = ["value 1", "value 2"];
    // // console.log(result1); // Output: value 1
    // // console.log(result2); // Output: value 2
    // const obj = { key1: "value 1", key2: "value 2" };
    // const { key1, key2 } = obj;
    // console.log(key1);
    // console.log(key2);
    // const array2 = [1, 2, 3, 4, 5];
    // const [first, second, ...rest] = array2;
    // console.log(first);
    // console.log(second);
    // console.log(rest);

    // const obj2 = { a: 1, b: 2, c: 3, d: 4 };
    // const { a, b, ...restObj } = obj2;
    // console.log(a);
    // console.log(b);
    // console.log(restObj);

    // const nestedArray = [1, [2, 3], 4];
    // const [firstElement, [secondElement, thirdElement], fourthElement] = nestedArray;
    // console.log(firstElement);
    // console.log(secondElement);
    // console.log(thirdElement);
    // console.log(fourthElement);

    // const nestedObj = { x: 1, y: { z: 2 } };
    // const { x, y: { z } } = nestedObj;
    // console.log(x);
    // console.log(z);

    const myobject = {
        name: "Bola",
        age: "30",
        car: {
            make: "Toyota",
            model: "Camry 2020"
        }
    };
  const { name, age, car: { make, model } } = myobject;
//   console.log(name); 
//   console.log(age);
//   console.log(make);
//   console.log(model);


// async function fetchfromAPI() {
//     return 2000; // Simulating an API response
// }
// function fetchData() {
// try {
//     const result = await fetchfromAPI(); // Awaiting an asynchronous operation
//     return result;
//     } catch (error) {
//         throw new Error("An error occurred while fetching data from the API: " + error.message);
//     }
//     console.log("We are still running other code while waiting for the API response.");

function fetchfromAPI() {
   return 2000; // Simulating an API response

}
function anAction(){
 try {
    const result = fetchfromAPI(); // Awaiting an asynchronous operation
    return result;
     } catch (error){
        return error.message;
     }
}
    //  console.log(anAction());
    //  console.log("We are still running")
    //  console.log(anAction());

// const promise = new Promise((resolve, reject) => {
//     if(false){
//         resolve("success")
//     }else {
//         reject("failed")
//     }
// });
// console.log(promise)
// promise.then(result =>{
//      console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// });

// console.log("we are still running");

// const results = await Promise.all([fetchfromAPI(),anAction()])
// console.log(results)

// const together = await[fetchfromAPI(),anAction()]
// console.log(together)

// setTimeout(()=> {console.log("Glory!!!!!!,God has done it")},2000)

// console.log("we are still running again");
