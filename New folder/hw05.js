function spinAround(r) {
	var rotations = 0;
	for (var i=0; i<r.length; i++)
		if (r[i] == "left")
			rotations += 1;
		else
			rotations += -1;
	return (Math.floor(Math.abs((rotations * 90)/360)))
}

console.log(spinAround(['left', 'right', 'left', 'right']))
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))
console.log(spinAround(['left', 'left', 'left', 'left']))