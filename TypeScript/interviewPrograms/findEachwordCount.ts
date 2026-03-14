let word = "testing the blue sky"
let words: string[] = word.split(" ")
let map: Map<string, number> = new Map()

for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1)
}

for (let [key, value] of map) {
    console.log(`${key}: ${value}`)
}