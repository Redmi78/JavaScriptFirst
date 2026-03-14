
let user:string ="MicroSoft"
console.log("User name is:", user)
let user1:string[] =[]

let userNames: string[]=user.split("")
for(let i=user.length-1;i>=0;i--){
    user1=user1.concat(userNames[i])
}
console.log("Reverse of the user name is:", user1.join(""))

let userName2 = "ClassMate users uses ClassMate"
let user3 = userName2.split(" ")
console.log(user3)
let user4:Map<string,number> = new Map()
for(let j=0;j<user3.length;j++){

    if(!user4.has(user3[j])){
        user4.set(user3[j],1)
    }else{
user4.set(user3[j],user4.get(user3[j])! + 1)
    }
}

for(let [key,value] of user4){console.log(`${key} :${value}`)}

let maxLength:number =0
let longestWord:string=""
for(let k=0;k<user3.length;k++){
    if(user3[k].length>maxLength){
        maxLength=user3[k].length
        longestWord=user3[k]
    }
}
    console.log("Longest word is:", longestWord);
console.log("Length of longest word is:", maxLength);
       

let p1:number = 5
let result2:number = 1
for(let i=1;i<=5;i++){
    console.log(`${p1} * ${i} = ${p1*i}`)

}

for (let i = 2; i <= p1; i++) {
        result2 =result2* i;
    }
console.log("Factorial of", p1, "is", result2)

let p2:string="silent"
let p3:string="tenils"

let p4:string[] =p2.split("")
let p5:string[] =p3.split("")

p4.sort()
p5.sort()
if(p4.join()===p5.join()){
    console.log("The strings are anagrams.")   
}else{
    console.log("The strings are not anagrams.")
}

let p6:number=5
let p7:number=1
p6=p6+p7
p7=p6-p7
p6=p6-p7
console.log("After swapping: p6 =", p6, "p7 =", p7)

let p8
p8=p6
p6=p7
p7=p8
console.log("After swapping: p6 =", p6, "p7 =", p7)


let vowel ="subba"
let vowelCount =0
let constantVowels =0
for(let i=0;i<vowel.length;i++) {
    if(vowel[i]==='a'||vowel[i]==='e'||vowel[i]==='i'||vowel[i]==='o'||vowel[i]==='u'){
        vowelCount++
    }
    else{
        constantVowels++
    }
}
console.log("Number of vowels in the string is:", vowelCount)
console.log("Number of consonants in the string is:", constantVowels)
