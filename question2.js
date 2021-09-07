/**
 * Question:
 * Modular multiplicative inverse is an important part of any cryptographic implementation. Write a code that
 * calculates the Modular multiplicative inverse of a number using Euclidean Algorith. 
 * 
 * Hint: I will be using Javascript which is my primary programming language in writing this. 
 * 
 */


// We first define the Euclidean algorithm function for finding GCD


/**
 * First element is the  remainder
 * Second element is the 
 * 
 */
let forwardValues = []


const EuclideanAlgorithmOfFindingGCD = (num1, num2) => {
    // We define our base case
    if(num1 === 0) return num2 // If the num1 is zero then our GCD is num2
    if(num2 === 0) return num1 // If the num2 is zero then our GCD is num1

    // We define num1 in our quotient remainder form 
    let maximum = Math.max(num1, num2) // Get the maximum number between both numbers
    let minimum = Math.min(num1, num2)

    let quotient = Math.floor(maximum/minimum)
    let remainder = maximum - (minimum * quotient)
    forwardValues.push([remainder, maximum, minimum, quotient])
    return EuclideanAlgorithmOfFindingGCD(minimum, remainder)
}






const inverseModularArithemetics  = (num1, num2)=> {
    EuclideanAlgorithmOfFindingGCD(num1, num2)
    forwardValues.pop()
    for(let i = 1; i< forwardValues.length -1; i++){
        
    }
}


const inverseModularArithemeticsResult = 
    inverseModularArithemetics(11, 8)