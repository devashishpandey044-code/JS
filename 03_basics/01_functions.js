function saymyname(){
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("E")
    console.log("V")
}
//saymyname()
//function addtwonumbers(number1,number2){
//    console.log(number1+number2);
//}
//addtwonumbers(3,4)
//function addtwonumbers(number1,number2){
//    return number1+number2
//} 
//const result=addtwonumbers(3,5)
//console.log("Result",result);
//function loginusermessage(username){
//   return `${username} just logged in`
//}
//console.log((loginusermessage("Dev")))
function loginusermessage(username){
    if(username===undefined){//username===undefined=!username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
  
}
//console.log(loginusermessage("Dev"))
//console.log(loginusermessage())
function calculatecartprice(...num1){
    return num1;
}
//console.log(calculatecartprice(100,200,300))
//... is rest/spread operator here it is acting as rest operator and also taking mutiple inputs from the user
function calculatecartprice1(val1,val2,...num1){
    return num1;
}
const user={
    name:"endev",
    price:700
}
//console.log(calculatecartprice1(100,200,300,400))// value 100,200 will go into the val1 and val2
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    name:"Sam",
    price:399
})

