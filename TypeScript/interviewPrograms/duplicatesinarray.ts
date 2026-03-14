let duplicates1: number[] = [1, 2, 3, 4, 5, 2, 3, 6]
let seen1:Set<number> = new Set()
let duplicatesResult: number[] = []     
for (let num of duplicates1) {
    if (seen1.has(num)) {
        if (!duplicatesResult.includes(num)) {  // Check to avoid adding the same duplicate multiple times
            duplicatesResult.push(num)           // Add to duplicates array
        }
    } else {
        seen1.add(num)  // First occurrence 

    }
}

// Print duplicate numbers if any
if (duplicatesResult.length > 0) {
    console.log("Duplicate numbers:", duplicatesResult.join(", "))
}