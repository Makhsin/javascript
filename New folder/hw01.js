function gcd(arr) {
	const lowest = Math.min(...arr);

    for (let factor = lowest; factor > 1; factor--) {
        let isCommonDivisor = true;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % factor !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if (isCommonDivisor) {
            return factor;
        }
    }

    return 1;
}

console.log(gcd([10, 20, 40]))
console.log(gcd([7, 11]))
console.log(gcd([156, 84, 60, 1188, 252]))