function Person(name,age){
    this.name=name;
    this.age=age;
}


Person.prototype.display=function(){
    console.log(this.name);
    console.log(this.age);
}
const thrisha=new Person("Thrisha",22)

console.log(thrisha)

thrisha.display();