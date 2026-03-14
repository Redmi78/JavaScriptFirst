let sentence = "and blue is sky and blue programming is fun"
let words: string[] = sentence.split(" ")  // split sentence into words

let seen: Set<string> = new Set()       // to track seen words
let duplicates: string[] = []           // to store duplicates

for (let word of words) {
    if (seen.has(word)) {
        if (!duplicates.includes(word)) {   // add only first duplicate occurrence
            duplicates.push(word)
        }
    } else {
        seen.add(word)  // first time seeing this word
    }
}

// Print duplicate words, if any
if (duplicates.length > 0) {
    console.log("Duplicate words:", duplicates.join(", "))
}