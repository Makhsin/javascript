function letterAtPosition(n) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	
	if (n % 1 !== 0 || n > 26 || n <= 0) return 'invalid';
	
	return alphabet[n-1];
}

console.log(letterAtPosition(1))
console.log(letterAtPosition(2))
console.log(letterAtPosition(3))