//in this we  will use map() , filter(), reduce()

let input1 = [2, 3, 4, 5]

let output1 = input1.map(x => x ** 2);
console.log(output1)

let input2 = [1, 2, 3, 4, 5, 6]
let output2 = input2.filter((x) => x % 2 == 0)

console.log(output2)


let input3 = [5, 10, 15, 20]
let output3 = input3.reduce((sum, currVal) => sum += currVal)

console.log(output3)

let input4 = [1, 2, 3, 4, 5]
let output4 = input4.filter((x) => x % 2 == 0)
                .map(x => x * x)
                .reduce((sum, currVal) => sum += currVal);

console.log(output4)