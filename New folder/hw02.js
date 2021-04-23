function reverse(txt){
	const output = txt.split('').reverse()
	
	for (let i = 0 ; i < output.length ; i++){
		if (output[i] === output[i].toUpperCase()){
			output[i] = output[i].toLowerCase()
		}
		else output[i] = output[i].toUpperCase()
	}
	return output.join('')
}

console.log(reverse("Hello World"))
console.log(reverse("ReVeRsE"))
console.log(reverse(""))