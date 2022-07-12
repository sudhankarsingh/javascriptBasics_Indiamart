function Person(first,last){
    this.first=first;
    this.last=last;
    // this.getFull=function(){
    //     return this.first+ " "+this.last;
    // }
}
Person.prototype.getFull=function(){
    return this.first+ " "+this.last;
}


function Student(age){
    this.age=age
}


Student.prototype=new Person("siddhu","singh");

Student.prototype.getAge=function(){
    return this.age
}

var student= new Student(46)
console.log(student.first)
console.log(student.last)
console.log(student.age)
console.log(student.getAge())
console.log(student.getFull())