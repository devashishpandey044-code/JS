//Primitive
// 7 types:string,number,boolean,null,undefined,symbol

 //Non Primitive
 //Array ,Objects,Functions
 const heros=["Shaktiman","naagraaj","doga"];
 let myObj={
    name:"hitesh",
    age:22,
 }
 // things which are written inside scope are come under the category of objects
 const myfunction=function(){
    console.log("hello");
 }


 const id=Symbol('123')
 const anotherId=Symbol('123')

 //console.log(id===anotherId);
 // stack and heap
 // stack->Primitive
 //heap->Non Primitive
 let myyoutubename=33
 let anothername=myyoutubename
 anothername="chai or code"
 console.log(anothername)
 console.log(myyoutubename)

 let userone={
   email:"user@google.com",
   upi:"user@ybl"
 }
 let userTwo=userone
 userTwo.email="hitesh@google.com"
 console.log(userone.email)
 console.log(userTwo.email)



