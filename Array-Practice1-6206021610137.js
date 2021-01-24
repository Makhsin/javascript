let arr1 = [ 'apple' , 1 , false ];
let arr2 = [ 'fries' , 2 , true ];
let arr3 = [ 'Mars' , 9 , 'apple' ];

console.log(checktype(arr1,arr2));
console.log(checktype(arr2,arr3));
console.log(checktype(arr3,arr1));
function checktype(arr1,arr2){
    let sum = [];
    for(let i = 0 ; arr1.length != i ; i++ ){
        if (typeof(arr1[i]) == typeof(arr2[i])){
            sum.push(true);
        }
        else {
            sum.push(false);
        }
    }
    return(sum);
}