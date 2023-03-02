// task-1

// let ary = [1, 2, 3, 8, 4, 5]
// let ary2 = [0, 8];
// let ans = true;
// ary.map(el => {
//     for (let v of ary2) {
//         if (el == v) {
//             ans = false;
//         }
//     }
// })

// console.log(ans)

// task -2
// let ary = [1,2,3,4,5]
// let ary2 = [2,3]
// let string = 'node'

// let res  = [ ...ary, ...ary2 ]

// console.log(res.length)


// console.log(res.sort().reverse())

// 3-task

// let a = -111;
// let b = [];

// if (a % 2 == 0) {
//     b.push(a / 2, a / 2)
// } else {
//     let c = Math.floor(a / 2)
//     b.push(c + 1, c)
// }
// console.log(b)


// 4-misol
// let ary = ['aa', 'a', 'ccc', 'bbbb']
// let b = []

// ary.map(el => {
//     b.push(el)

//     b.map(v => {
//         if (el.length >  v.length){

//         }

//     })


// })

// 6-task


// let a = [1, 5, 9];
// let b = []
// let d = 0;

// a.map(el => {
//     let q = el**3
//     b.push(q)
//     d += q
// })

// console.log(b, d)


// 7-task

// let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let toq = []
// let juft = []


// ary.map(el => {
//     if(el%2==0){
//         juft.push(el*5)
//     }else{
//         toq.push(el*7)
//     }
// })
// let umum  = [...toq, ...juft]

// console.log(toq, juft)

// console.log(umum)


// 8-task


// let ary = [5, 9, 2, 33, 15, 88]
// let b = 0;

// ary.map(el => {
//     b += el
// })

// console.log(b / ary.length)


// 9-task

// let a = [1,2,3,4,5,6,7,8,9,0]



// 10-task

// let a= 152;
// let b= []

// if(  typeof a  === 'number' ){
//     b.push(a)
// }

// console.log(b)

// const number = 151515;
// let digits;
// if (typeof number != 'object') {
//     digits = String(number)
//         .split('')
//         .map(Number);
// }
// // else {
// //     digits = number.split(" ").map(Number)
// // }

// console.log(digits);



// 11-task

// let a= [1,2,3,4,5];

// let b = Math.max(...a)
// let c = Math.min(...a)

// let res = [b*5, c*5]

// console.log(res)


// task-12
// function getDepth(val) {
//     if (Array.isArray(val)) {
//         return 1 + Math.max(0, ...val.map(getDepth))
//     } else {
//         return 0
//     }
// }
// let result = getDepth([[[[[[[[]]]]]]]])
// console.log(result);

// 13-task

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let b = []
let qa =[]

for (let i = a.length - 1; i > -1; i--) {
    let ner = []
    for (let j = a[i].length-1; j > -1; j--) {
        let c = [a[i][j]]
        ner.push(c)
    }
    b.push(ner)
}

console.log(b)









// New- Protataype
// let a = [1, 2, 3, 4, 5];
// let s = 5;

// Array.prototype.Mypush = function (...tex) {
//     for (let i = 0; tex.length > i; i++) {
//         (this[this.length] = tex[i])
//     }
// }
// a.Mypush('olma', 'nok')
// console.log(a)


