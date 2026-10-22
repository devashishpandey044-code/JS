const tinderuser=new Object()
const tinderuser1={}
tinderuser.id="123abc"
tinderuser.name="Sammy"
tinderuser.isloggedin=false
//console.log(tinderuser);
//console.log(tinderuser1)
const regularuser={
    email:"endev@gmail.com",
    fullname:{
        username:{
            firstname:"endev",
            lastname:"pandey"
        }
    }
}
//console.log(regularuser.fullname.username.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//console.log(obj3)
//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);
//const obj3=Object.assign({},obj1,obj2,obj4)//first object inside assign is target object and all other objects inside that are source objects elements of alls ource objects get into the target object
//console.log(obj3)
//const obj3={...obj1,...obj2}
//console.log(obj3)
const user=[
    {
        id:1,
        email:"endev@gmail1.com"
    },
    {
        id:2,
        email:"endev@gmail2.com"
    },
    {
        id:3,
        email:"endev@gmail3.com"
    },
    {
        id:4,
        email:"endev@gmail4.com"
    },
    {
        id:5,
        email:"endev@gmail5.com"
    }
]
//console.log(user[3].email)
//console.log(Object.keys(tinderuser));//fetches all the keys of an object
//console.log(Object.values(tinderuser));// fertches all the values of an object
console.log(Object.entries(tinderuser))//fetches key value pair as arrays
console.log(tinderuser.hasOwnProperty('isloggedIn'));