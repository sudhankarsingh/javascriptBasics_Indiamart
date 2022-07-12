console.log(this);

function sample(){
    console.log(this)

}

sample();

var obj={
     name: "siddhu",
     getName: function(){
          console.log(this);
     }
}
obj.getName()