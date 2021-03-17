function capToFront(str) {
    let up = str.match(/[A-Z]/g);
    let lo = str.match(/[a-z]/g);
    return (up.join('') + lo.join('')) //join จะเชื่อมแค่ string เท่านั้น
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));