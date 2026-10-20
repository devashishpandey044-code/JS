const myArr=[0,1,2,3,4,5]
console.log(myArr[1]);
const myArr2=new Array(1,2,3,4)
myArr.push(6)
console.log(myArr);
myArr.pop()// pops the last value of array
console.log(myArr);
myArr.unshift(9)//adds value in starting of the array
console.log(myArr);
myArr.shift()// removes the value from the top of the array
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
const newArr=myArr.join()//join converts an array into an string
console.log(myArr);
console.log(newArr)
console.log(typeof newArr)
console.log("A",myArr)
const myn1=myArr.slice(0,3)
console.log("myn1",myn1)
console.log("B",myArr)
console.log("C",myArr)
const myn2=myArr.splice(1,3)//splce include upperbound and remove the spliced section from the main array
console.log("myn2",myn2)
console.log("C",myArr)
