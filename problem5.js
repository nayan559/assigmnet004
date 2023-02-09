//Problem 05
function gemsToDiamond(number1,number2,number3){
    let friend1 = 21;
    let friend2 = 32;
    let friend3 = 43;
    if(typeof(number1)!="number" || typeof(number2)!="number" || typeof(number3)!="number") {
        return "Please Enter Any Number.";
    }else{
        let totalNumberOfDiamond = (friend1 * number1) + (friend2 * number2) + (friend3 * number3);
        if( totalNumberOfDiamond > (1000*2) ){
            return totalNumberOfDiamond - 2000;
            }else{
                return totalNumberOfDiamond;
        }
    }  
}

console.log("Problem 5 : ",gemsToDiamond(100,5,1));