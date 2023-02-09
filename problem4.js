//Problem 04
function findingBadData(numbers) {
    let numberOfBadData = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0){
            numberOfBadData++;
        }
    }
    return numberOfBadData;
}
console.log("Problem 4 : ",findingBadData([  1,2,5  ])); 