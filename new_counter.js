let value=0;

sel=document.querySelectorAll(".container");
console.log(sel[1]);
console.log(sel[0]);


function increment()
{
    console.log("incremented");
}

ok1.addEventListener('click',function(){
    value++;
    let x=document.querySelectorAll('.container')[0].innerHTML=value;
    console.log(x);
})

function decrement()
{
    console.log("decremented");
}

ok2.addEventListener('click',function(){

    if(value<=0)
    {
        alert('Value is now negative');
    }
    value--;
    let x=document.querySelectorAll('.container')[0].innerHTML=value;
    console.log(x);
})

function reset1()
{
    console.log("reset");
}

ok3.addEventListener('click',function(){
    value=0;
    let x=document.querySelectorAll('.container')[0].innerHTML=value;
    console.log(x);
})