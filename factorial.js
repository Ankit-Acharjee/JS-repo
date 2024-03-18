function fact(n){
    let fact=1;
    while(n){
        fact=fact*n;
        n--;
    }
    return fact;
}

console.log(fact(3))
console.log(fact(5))
console.log(fact(4))



function recursiveFactorial(n){
    if(n<2){
        return 1;
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(3))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(4))