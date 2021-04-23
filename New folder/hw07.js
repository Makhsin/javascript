function getEquivalent(note) {
	let A;
	if (note == "Ab") { A = "G#" }
	else if (note == "A#") { A = "Bb" }
	else if (note == "Bb") { A = "A#" }
	else if (note == "A#") { A = "Bb" }
	else if (note == "C#") { A = "Db" }
	else if (note == "Db") { A = "C#" }
	else if (note == "D#") { A = "Eb" }
	else if (note == "Eb") { A = "D#" }
	else if (note == "F#") { A = "Gb" }
	else if (note == "Gb") { A = "F#" }
	else if (note == "G#") { A = "Ab" }
	return A;
}
console.log(getEquivalent("C#"))
console.log(getEquivalent("Db"))
console.log(getEquivalent("D#"))
console.log(getEquivalent("Eb"))
console.log(getEquivalent("F#"))
console.log(getEquivalent("Gb"))
console.log(getEquivalent("G#"))
console.log(getEquivalent("Ab"))
console.log(getEquivalent("A#"))
console.log(getEquivalent("Bb"))
