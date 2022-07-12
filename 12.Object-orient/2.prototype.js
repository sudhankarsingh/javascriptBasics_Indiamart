// function Student(){
//     this.name="Scott"
//     this.gender="male"
// }

// var st1=new Student();
// st1.age=26;
// console.log(st1);


// var st2=new Student();
// //st2.age=26;
// console.log(st2);

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
var per1=new Person("siddhu","singh");
console.log(per1);

var per2=new Person("virat","singh");
console.log(per2);

var per3=new Person("rj","singh");
console.log(per3);