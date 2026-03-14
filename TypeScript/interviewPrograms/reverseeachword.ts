let k ="india is my country"

let splitK:string[]= k.split(" ")
let result: string[] = []
console.log(splitK)

for (let str2  of splitK){
    let rev2:string=""
    for(let i=str2.length-1;i>=0;i--){
        rev2=rev2+str2[i]
    }
    result.push(rev2)
}

console.log(result.join(" "))