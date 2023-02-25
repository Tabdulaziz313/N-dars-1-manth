// function showToStringNumber(n){
//     let numbersToStr = ['nol', 'bir', 'ikki'];

//    let res = numbersToStr.filter((num, idx) => idx === n);
//    return res;
// }

// let [numberStr] = showToStringNumber(5);

// console.log(numberStr);


// function isValid(text){
//     let isBool = false;

//     for(let i = 0; i < text.length; i++){    
//         if(+text[i]){
//         } else{
//             isBool = true;
//         }
//     }
//     if(isBool) return false;
//     return true;
// }

// let res = isValid('2342454 54334');

// console.log(res);

/*
function numberToWord(num1, amal, num2){
    //let mathsOp = ['plus', 'minus', 'multiply', 'divide']
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  let n1, n2;
   for(let n = 0; n < numbers.length; n++){
    if(numbers[n] === num1){
        n1 = n
    }
    if(numbers[n] === num2){
       n2 = n
    }
   }
     if(amal == 'minus'){
        let sum = n1 - n2
        return numbers[sum]
        
    }
    if(amal == 'plus'){
        let sum = n1 + n2
        if(sum > 10){
            return sum
        }
        return numbers[sum]
        
    }


}

let res = numberToWord('ten', 'minus', 'three')
let res2 = numberToWord('one', 'plus', 'three')

console.log(res2);

*/


//task 1 easy

function wordCount(num){
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    let str = numbers[+num]



    let newStr = ''

    for(let i = 0; i < num; i++){
        newStr += str

    }
    
    console.log(newStr);

}

wordCount("7")

console.log( typeof '34');
console.log( typeof +'34');
console.log( +'34');
console.log('34');