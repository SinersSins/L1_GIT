
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}


function forEachCustom(arr, callback) {
   
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
   
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

forEachCustom(input, (element) => {
    if(isPrime(element)){
        console.log(`${element} is prime`)
    }
})

