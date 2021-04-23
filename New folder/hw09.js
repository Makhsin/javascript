function add(n) {
	return function(y) {
		return n+y
	}
}

console.log(add(20)(10))
console.log(add(30)(10))
console.log(add(100)(100))