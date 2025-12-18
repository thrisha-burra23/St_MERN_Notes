var  a=10;
{
  var  a=20; // shadowed 
    console.log("inside block: ",a);
 
}
 
console.log("global: ",a); // 20 cuz var is functional scoped so changes are relfleted here 


let b=100;
{
let b=200; // shadowed 
    console.log("inside block: ",b); //200
 
}
 
console.log("global: ",b); // 100 simalrly const 