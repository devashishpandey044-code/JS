const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
// this gives us the infromation of the current context of the object

//console.log(this)//this will give context about the node environment which is empty if you do this in browser it will give info about browser context
//function chai(){
//    let username="Hitesh";
 //   console.log(this.username);
//}
//chai()
//const chai=(){
//           let username="Hitesh";
//            console.log(this.username);
//}
/* const chai=()=>{
    let username="hitesh"
    console.log(this.username);
}

chai() */
/* const addtwo=(num1,num2)=>{
    return num1+num2   // explicit return 
}

console.log(addtwo(3,4)) */
/* const addtwo=(num1,num2)=> (num1+num2)// implicit return
console.log(addtwo(5,6)) */
// in arrow function if we will use arrow fuction with curly braces then we have to use the return otherwise we do not have to use return function

