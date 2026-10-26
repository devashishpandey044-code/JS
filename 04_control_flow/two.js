// for of
/* const arr=[1,2,3,4,5];
for(const num of arr){
    console.log(num)
} */
/* const greeting="hello wortld";
for(const greet in greeting){
    console.log(`${greet}`)
} */
/* const map=new Map()
map.set("IN","India")
map.set("fr","france")
map.set("it","italy")

for(const [key,value] of map){// not applicable to objects
    console.log(`${key} for ${value}`);
} */
/* // for in loop for objects
const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
for(const key in myObject){
    console.log(`key =>${key},value=>${myObject[key]}`);
}
// for in loop on index
const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(programming[key])
} */
// maps are not iterable so we cannot apply for in loop on them
const  coding=["js","ruby","java","python","cpp"]
coding.forEach(function (val){
    console.log(val);
})// same we can use array function
