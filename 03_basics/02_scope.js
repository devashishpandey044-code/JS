//var c =300
var a =200;
if(true){
    let a=10
    const b=20
    var c=30
}
//console.log(c)
function one(){
    const username="Endev"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    
    two()
}

// key point is we can access the parent function from inside the child function but vice versa is not true
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);

}
//console.log(username)
// when we only declare a fuction we can access it from above the function also but when we store a function inside an variable(expression) we can't access it from the function
//function stored in a variable =expression