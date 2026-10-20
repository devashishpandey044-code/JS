    const score=400
    const balance= new Number(100)
    console.log(balance)
    console.log(balance.toString());
    const newbalance=99.9897;
    console.log(newbalance.toFixed(2));
    const othernumber=23.8999;
    console.log(othernumber.toPrecision())
    const anothernumber=123.8999;
    console.log(anothernumber.toPrecision(4))
    const hundreds=10000000;
    console.log(hundreds.toLocaleString('en-IN'))
////++++++++++++++++++++++Maths+++++++++++++++++++++++++++
    console.log(Math);
    console.log(Math.abs(-4))
    console.log(Math.ceil(4.2));
    console.log(Math.floor(4.9));
    console.log(Math.round(4.6));
    console.log(Math.min(4,3,6,8));
    console.log(Math.max(4,3,6,8));
    console.log(Math.random());
    console.log((Math.random()*10)+1);// to avoid getting zero
    console.log(Math.floor(Math.random()*10)+1);
    const max=20;
    const min=10;
    console.log(Math.floor(Math.random()*(max-min+1))+min);
