/* const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)// used to calculate bill of multiple items
// if we want to add multiple things into the same variable we can use  loop using reduce 
console.log(myTotal) */

/* const myNums=[1,2,3]

const myTotal=myNums.reduce((acc,currvalue)=>{
    console.log(`acc:${acc},currval:${currvalue}`)
    return acc+currvalue},0)
console.log(myTotal); */

const shoppingcart=[
    {
        Coursename:"JS",
        Price:1999
    },
    {
        Coursename:"Data Science",
        Price:4999
    },
    {
        Coursename:"Ai Engineer",
        Price:5999
    }
]
const myCartTotal=shoppingcart.reduce((acc,item)=>acc+item.Price,0)
console.log(myCartTotal)