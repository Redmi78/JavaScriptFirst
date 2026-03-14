let c ="testuser"
let d=""
for(let i=c.length-1;i>=0;i--){
    d=d+c[i]
}   
console.log(d)

if(c===d){

    console.log("The string is a palindrome.")
}   
else{
    console.log("The string is not a palindrome.")
}