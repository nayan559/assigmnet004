//Problem 02
function evenOdd(myString){
    if(typeof(myString) != "string"){
        return "Please enter any atring";
    }else{
        if(myString.length % 2 == 0){
        return "even";
        }else{
            return "odd";
        }
    }
    
}
console.log(evenOdd(12));