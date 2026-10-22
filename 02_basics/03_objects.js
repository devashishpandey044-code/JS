// objects literals
const mysym=Symbol("symbolvalue")
const Jsuser={
    name:"Hitesh",
    age:18,
    greeting:function(){console.log("Hello JS user")},
    [mysym]:"symbolvalue",
    greetingtwo:function(){console.log(`Hello JS user,${this.name}`)},
    "full name":"Hitesh Choudhary",
    location:"Jaipur",
    email:"hitesh@google.com",
    isloggedIn:false

}// objects are declared inside the curly braces
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mysym])
Jsuser.email="endev@gmail.com"
console.log(Jsuser["email"])
Object.freeze(Jsuser)
Jsuser.location="Etawah"
console.log(Jsuser)
//Jsuser.greeting=function(){
  //  console.log("Hello JS user")
//}
Jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`)
}
//console.log(Jsuser.greeting());// executes function
//console.log(Jsuser.greeting)// gives function reference
console.log(Jsuser.greetingtwo())
//console.log(Jsuser.greetingtwo)

