let testusers ="testing the data"
console.log(testusers)

if(testusers==="testing the data"){
    console.log("Welcome, testusers!")
}
else if(testusers==="admin"){
    console.log("Welcome, admin!")
}

switch(testusers){
    case "testing the data":
        console.log("This is testing the data")
        break;  
    case "admin":
        console.log("This is admin")
        break;
    default:
        console.log("This is default case")

}