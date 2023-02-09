//Problem 01
function mindGame(number){
    if(typeof(number) != "number"){
        return "Please entar any number."
    }else{
        return ((((number*3) + 10) / 2) -5);
    }
    
}
console.log(mindGame("5"));