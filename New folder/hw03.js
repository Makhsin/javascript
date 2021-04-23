function isAutomorphic(n) {
	let sq = Math.pow(n, 2);
	return sq.toString().endsWith(n);
}

console.log(isAutomorphic(0))
console.log(isAutomorphic(1))
console.log(isAutomorphic(5))