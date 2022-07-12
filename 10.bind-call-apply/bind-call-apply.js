var person1={
    first : "siddhu",
    second: "singh"
}
var person2={
    first : "rajan",
    second: "singh"
}
var person3={
    first : "ayush",
    second: "gupta"
}

function display(message,city){
    return message+" to "+ city + " mr. "+this.first+this.second;
}

var dispBind=display.bind(person1,"welcome","lkoS")
console.log(dispBind())

var dispCall=display.call(person2,"welcome","stp")
console.log(dispCall)

var dispApply=display.apply(person3,["welcome","lkp"])
console.log(dispApply)

