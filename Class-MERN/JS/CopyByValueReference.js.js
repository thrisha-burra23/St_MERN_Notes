//copy by value

let a=23;
let b=a;
console.log("a",a);
console.log("b",b);
b=20000;
console.log("after changing:")
console.log("a",a);
console.log("b",b);

//copy by reference

let object1={
    val1:"value11",
    num1:23
}
let object2=object1;
console.log("Object1",object1);
console.log("Object2",object2);
object2.val1="value2222";
console.log("After changing val1 in object 2")
console.log("Object1",object1);
console.log("Object2",object2);


//spread operator and trying not to change original value

let object3={
    ...object1,
    val1:9999
}

console.log("Object1",object1);
console.log("Object3",object3);