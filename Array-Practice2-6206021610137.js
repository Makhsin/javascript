let furniture = ['Table','Chairs','Couch'];

function loop1(furniture){
    for(let i = 0 ; furniture.length != i ; i++ ){
        console.log(furniture[i]);
        for(let x of furniture[i] ){
            console.log(x);
        }
    }
}
loop1(furniture);