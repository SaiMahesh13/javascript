# javascript
JavaScript Exam Abjayon
function leftRotate(arr , d , n) {
    for (i = 0; i < d; i++)
        leftRotatebyOne(arr, n);
}
 
function leftRotatebyOne(arr , n) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = temp;
}
 
function printArray(arr) {
    console.log(arr);
}
     
var arr = [ 1, 2, 3, 4, 5];
d = 2;
n = 5;
leftRotate(arr, d, n);
printArray(arr);
