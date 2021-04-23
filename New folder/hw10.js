function clearFog(str) {
        if (str.match(/f|o|g+/gi) === null) {
        return "It's a clear day!"
    } else {
        return str.replace(/f|o|g+/gi, "")
    }
}

console.log(clearFog("fogfogfffoooofftreesggfoogfog"), "trees")
console.log(clearFog("foooffFGGGGofoogfosgfogfkygfogfogfoooggg"), "sky")
console.log(clearFog("ffogfogoggofobirdsandthebeesfOGgoffog"), "birdsandthebees")
