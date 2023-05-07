let mixedArray = [15, 'Simeon', 1, 3 ,'Beulah', 8,'Evania', 56, 78, 12, 100, 25, 'Abram']
console.log('Mixed Array', mixedArray);









let resulltNuMArray =[]
let resulltStringArray = []
mixedArray.forEach(arrayItem=>{
    //console.log('Array details of', arrayItem);
    if(typeof(arrayItem) === 'number'){
        //console.log('True');
        resulltNuMArray.push(arrayItem)  
    }else if(typeof(arrayItem)=== 'string') {
        resulltStringArray.push(arrayItem)
    }
})
console.log('New NUMBER Array', resulltNuMArray);
console.log('New String Array', resulltStringArray);

resulltNuMArray.sort((a, b)=>{
    return a - b
})
console.log('final Array', resulltNuMArray);

console.log('Concat array');

let finalArry= resulltNuMArray.concat(resulltStringArray)
console.log('Final Array', finalArry);
