function selectionSort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    let min = getMin(arr, i);
    swap(arr, min, i);
  }
  return arr;
}

function getMin(arr, start) {
  let min = start;
  let n = arr.length;
  for (let i = start; i < n; i++) {
    if (arr[min] > arr[i]) {
      min = i;
    }
  }
  return min;
}
function swap(arr, min, i) {
  let temp = arr[min];
  arr[min] = arr[i];
  arr[i] = temp;
}

console.log(selectionSort([4, 5, 1, 45, 64, 26, 3, 2]));

// let arr = [45,64,26]
// console.log(getMin(arr,0))
