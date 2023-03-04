// Task-1



// class Home {
//     constructor(countrs, number) {
//         this.countrs = countrs;
//         this.number = number;
//     }
// }
// let home = new Home('toshlent', 11);
// let home2 = new Home('toshlent', 12);
// let home3 = new Home('toshlent', 13);
// let home4 = new Home('toshlent', 14);
// let home5 = new Home('toshlent', 15);

// console.log(home)
// console.log(home2)
// console.log(home3)
// console.log(home4)
// console.log(home5)


// Task -2

// class Doldor {
//     constructor(countrs, sum) {
//         this.countrs = countrs;
//         this.sum = sum;
//     }

//     doldor() {
//         console.log(`Doldor  ${this.sum * 11380}`);
//     }
//     yewro() {
//         console.log(`Yevro  ${this.sum * 12120}`)
//     }

//     tlir() {
//         console.log(`Turk  ${this.sum * 680}`)
//     }

// }
// let home = new Doldor('toshlent', 100);
// home.doldor()
// home.yewro()
// home.tlir()

// let home2 = new Home('toshlent', 12);
// let home3 = new Home('toshlent', 13);
// let home4 = new Home('toshlent', 14);
// let home5 = new Home('toshlent', 15);


// 3-task

// class NewMath{
//     static round(arr){
//         console.log(Math.round(arr))
//         return
//     }
//     static cail(arr){
//         console.log(Math.ceil(arr))
//         return
//     }
//     static floor(arr){
//         console.log(Math.floor(arr))
//         return
//     }
//     static trunc(arr){
//         console.log(Math.trunc(arr))
//         return
//     }
// }

// NewMath.trunc(5.88)

// 4-task

// class Shakl {
//     constructor(title, color) {
//         this.title = title;
//         this.color = color;
//     }
//     getTitle() {
//         console.log(this.title)
//         return
//     }
//     getColor() {
//         console.log(this.color)
//         return
//     }

//     getAll() {
//         console.log(this.title, this.color)
//         return
//     }
// }

// let tot = new Shakl('tortburchak', 'qizil')

// tot.getColor()
// tot.getTitle()
// tot.getAll()




// Extend 5-misol

// class MathPi {
//     static mathPi(){
//         console.log(Math.PI)
//     }
// }


// MathPi.mathPi();


// 6-task


class Data {
    yaer
    month
    date
    day
    hours
    minuts
    second
    milli
    time
    month
    constructor() {
        this.yaer = yaer
        this.month = month
        this.date = date
        this.day = day;
        this.hours = hours;
        this.minuts = minuts;
        this.milli = milli;
        this.time = time;
    }

    getYear() {
        console.log(this.yaer)
    }
    getMonth() {
        console.log(this.month)
    }
    getDate() {
        console.log(this.date)

    }
    getDay() {
        console.log(this.day)
    }
    getHours() {
        console.log(this.hours)
    }
    getMinuts() {
        console.log(this.minuts)

    }
    getSecond() {
        console.log(this.second)

    }
    getMilli() {
        console.log(this.milli)

    }
    gettime() {
        console.log(this.time)

    }

}









// 7-task



// class Animl {
//     constructor(footer) {
//         this.footer = footer
//     }
// }

// class HomeEnimls extends Animl {
//     constructor(footer, tip) {
//         super(footer)
//         this.tip = tip
//     }
// }
// class Dog extends HomeEnimls {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }
// class Sheep extends HomeEnimls {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }
// class Cow extends HomeEnimls {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }




// class WildAniml extends Animl {
//     constructor(footer, tip) {
//         super(footer)
//         this.tip = tip
//     }
// }

// class LIon extends WildAniml {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }
// class Rabbit extends WildAniml {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }
// class Fox extends WildAniml {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }
// class Wolf extends WildAniml {
//     constructor(footer, tip, age) {
//         super(footer, tip)
//         this.age = age
//     }
// }

// let wolf = new Wolf(4, 'wild', 5)
// console.log(wolf)



