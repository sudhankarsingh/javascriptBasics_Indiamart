function Shape(){

}

Shape.prototype.draw=function (){
    return "I am generic shape"
}

//circle

function Circle(){

}

Circle.prototype=new Shape()

Circle.prototype.draw=function(){
    return "I am circle"
}

var shape=new Shape()
console.log(shape.draw())


var circle=new Circle()
console.log(circle.draw())