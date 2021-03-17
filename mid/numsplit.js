
function checknum(num){
    if((num % 2) == 0){
        return [(num / 2),(num / 2)]
    }
    else {
        return [(num / 2),(num / 2)+1]
    }
    //return [Math.floor (num / 2),Math.ceil (num / 2)]
}
console.log (checknum(4));
console.log (checknum(10));
console.log (checknum(11));
console.log (checknum(-9));