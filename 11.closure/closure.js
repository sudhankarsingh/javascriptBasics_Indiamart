function greet(message){
     return function (name){
        return message+ " " +name;
     }
}

var first=greet("hello");
console.log(first);
var second=first("siddhu");

console.log(second);