function findmax(num){
    num = num.toString(); 
    return (Math.max(...num)); // array ต้องใส่ 3 จุด
}
console.log (findmax(379));
console.log (findmax(2));
console.log (findmax(377401));