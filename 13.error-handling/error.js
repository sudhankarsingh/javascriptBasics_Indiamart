try {
    
} catch (ex) {
    
}finally{

}



try {
    var op=getMessage("hello")
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("run always")
}


try {
    var op=[1,2]
    console.log(op.length)
    if(op.length>1){
        throw{
            studentId:101,
            message: "duplicate rekard"
        }
    }
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("run always")
}