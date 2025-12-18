function x() {
  let a = 1;
  return function y() {
    let b = 2;
    return function z() {
      let c = 3;
      console.log(a + b + c)
    };
  };
}

x()()(); 


function counter(){
 let  count =0;

    this.incrementCounter=function(){
        count++;
          console.log(count);
    }
    this.decrementCounter=function(){
        count--;
          console.log(count); 
    }
}

let  ctr= new counter();

ctr.incrementCounter();



