/* 🟢  Easy Level – Get Comfortable with Basics*/


 

// A simple Promise that resolves with the message "Hello, Thrisha!" after 2 seconds using setTimeout.

const hello = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, Thrisha!")
    }, 2000)
})

hello.then((response) => {
    console.log(response);
})











// Write a Promise that checks if a number is even. If it is, resolve with "Even number", 
// else reject with "Odd number".
const evenOdd = new Promise((resolve, reject) => {
    n = 23;
    if (n % 2 == 0) {
        resolve("It is even")
    } else {
        reject("It is odd")
    }
})

evenOdd.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})




// // Simulate a coin toss using a Promise. Resolve with "Heads" or "Tails" randomly.
const toss = new Promise((resolve) => {
    let coin = Math.random() < 0.5 ? "Heads" : "Tales";
    resolve(coin);
})

toss.then((response) => {
    console.log("Coin toss result->", response)
})




// // Chain two .then() calls: First one returns "Step 1 done", second one appends " → Step 2 done" 
// and logs the final result.

const steps = new Promise((resolve, reject) => {
    resolve("Step 1 done");
})

steps
    .then((response) => {
        return response + " -> Step 2 done";
    }).then((response) => {
        console.log(response)
    })



// //Handle a rejected Promise using .catch() and display a custom error 

const rejectedPromise = new Promise((resolve, reject) => {
    reject("custom error")
})

rejectedPromise.catch((error) => {
    console.log(error)
})





// /*🟡 Medium Level – Combine Logic and Flow*/

// /*1. **Create a function `checkLoginStatus()` that returns a Promise. 
// **If `isLoggedIn = true`, resolve with `"Welcome back!"`, else reject with `"Please log in."`
// */

function checkLoginStatus(isLoggedIn) {

    return new Promise((resolve, reject) => {
        if (isLoggedIn) {
            resolve("Welcome back!")
        } else {
            reject("Please log in")
        }
    })
}

isLoggedIn = true;

checkLoginStatus(isLoggedIn)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })






// //2. **Use `Promise.all()`** to simulate fetching user data, cart items, and notifications — all as separate Promises. Log the combined result.
// //3. **Build a Promise-based calculator** that takes two numbers and an operation (`+`, `-`, `*`, `/`) and resolves with the result.
// //4. **Create a Promise that resolves or rejects based on time**: If current seconds are even, resolve; if odd, reject.
// //5. **Convert a callback-based `setTimeout` function** into a Promise-based delay function called `wait(ms)`.


