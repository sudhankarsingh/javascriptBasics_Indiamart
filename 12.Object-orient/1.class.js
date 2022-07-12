//class
 function Student(){

 }

 //Instance
 function Person(){

 }

 var person1 = new Person() //person1 is instance


 //constructor
 function Order(){
    console.log("Order Is Initiated")
 }

 var order1=new Order() //order is called constructor

 //properties

 function Customer(gender){
    this.gender=gender; //this is property
 }

 var cust1=new Customer("male");

 console.log(cust1);