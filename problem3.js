//Problem 03
function isLGSeven(number) {
    if(typeof(number) != "number"){
        return "Please Enter Any Number.";
    }else{
        if((number - 7) < 7){
        return number - 7;
        }else{
            return number*2;
        }
    }  
}
console.log("Problem 3 : ",isLGSeven("Nayem"));