function one(){
    return function two(){
        return function three(){
            return 10;
        }
    }
}

console.log(one()()());