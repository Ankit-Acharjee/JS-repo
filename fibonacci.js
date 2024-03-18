
// let n=7;
// let sum=[];
// sum[0]=0;
// sum[1]=1;
// for(let i=2;i<n;i++)
// {
//     sum[i]= sum[i-1]+ sum[i-2]
    
// }
// console.log(sum)

function fibonacci(n){
    const fib =[0,1]
    for(let i=2; i<n; i++)
    {
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}

// console.log(fibonacci(3))
// console.log(fibonacci(6))
// console.log(fibonacci(8))




function recursiveFibonacci(n){
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1)+ recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
