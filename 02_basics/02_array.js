const marvel_heroes=["Ironman","THOR","CaptainAmerica"]
const DC_Heroes=["Spiderman","Loki","Venom"]
//marvel_heroes.push(DC_Heroes)// it pushes the entire array in the given array 
//console.log(marvel_heroes)//
//const allheroes=marvel_heroes.concat(DC_Heroes)//it adds the elements of newarray in the existing exitingarray
//console.log(allheroes)
//const all_new_heroes=[...marvel_heroes,...DC_Heroes]
//console.log(all_new_heroes)
const very_new_array=[1,2,3,4,[5,6,7,7,7],8,9,[4,5,6,[1,2,3]]]
const real_another_array=very_new_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))//need to mention explicitly
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))
