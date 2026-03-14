 const str1 = "subba"
const str2 = "silent"
const arr1: string[] = str1.split("")
const arr2: string[] = str2.split("")
arr1.sort()
arr2.sort()

if(arr1.toString() === arr2.toString()){
    console.log("The strings are anagrams.")
}else{
    console.log("The strings are not anagrams.")
}
