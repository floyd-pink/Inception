document.getElementById("generator").onclick=function()
{
    let x=Math.floor(Math.random()*6 +1);
    d=document.getElementById("h2");
    console.log(x);
    d.innerText=x;
}
document.getElementById("reset").onclick=function()
{
    d=document.getElementById("h2");
    d.innerText=("Click Below");
}

