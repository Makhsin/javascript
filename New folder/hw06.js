function percentageChanged(oldPrice, newPrice) {
    let oldP = +oldPrice.match(/[0-9]+/).join('');
    let newP = +newPrice.match(/[0-9]+/).join('');

    if(oldP > newP){
        return `${Math.round(((oldP-newP)*100)/oldP)}% decrease`;
    } else if(newP > oldP){
        return `${Math.round(((newP-oldP)*100)/oldP)}% increase`;
    } else {
        return 'same cost';
    }
}

console.log(percentageChanged("$800", "$600"))
console.log(percentageChanged("$1000", "$840"))
console.log(percentageChanged("$700", "$650"))