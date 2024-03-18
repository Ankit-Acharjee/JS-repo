
let arr = []
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('enter the numbers', nums => {
    arr = nums.split(' ').map(Number);
    console.log(bubbleSort(arr))
    readline.close();
  });

function bubbleSort(arr){
    let n=arr.length -1;

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr
}



