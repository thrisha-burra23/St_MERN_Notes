

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error!!")
    }, 1000);
})

console.log(prom);

prom.then((response) => {
    console.log("Response Data", response);
}).catch((error) => {
    console.log("Error ...", error);
}).finally(() => {
    console.log("Finally block");
})


/**
 * Think of it like the pizza delivery service.
 * 1. You(frontend developer) describe: "I will bake the pizza, and when it is ready i will call either resolve (delivered) or reject (order failed)."
 * 2. JS gives you two phone numbers/ keys (resolve, reject) you can dial later.
 * 3. If you dial resolve("Pizza is ready!"), the promise becomes "fullfilled".
 * 4. If you dial reject("Pizza is over baked!"), then promise becomed "rejected".
 */

const pizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success)
            resolve("Pizza is ready!");
        else
            reject("Pizza is over baked!");
    }, 2000);

});

pizzaOrder.then((response) => {
    console.log("Success-->",response)
}).catch((error) => {
    console.log("Error-->",error)
}).finally(() => {
    console.log("The End...")
})