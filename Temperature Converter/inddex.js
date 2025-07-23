//variable scope =where a variable is recognized and accessible (local vs Global)
 //declaring the global function allows us to such it inside any function easily
let x=document.getElementById("h1");


let F,C;
document.getElementById("submit").onclick=function()

{
     let t=document.getElementById("Temperature").value;
    if(t=="")
    {
        alert("please input any value");
    }
    else{
        let c=document.getElementById("cel").checked;
        let f=document.getElementById("feh").checked;

    if(c)
    {
      F=(t*1.8)+32;
      console.log(F);
       x.innerText=(`It is ${F} in FAHREMHEIT`)
    }
    else if(f)
    {
      C=Math.floor((t-32)*5/9);
      console.log(C);
       x.innerText=(`It is ${C} in CELCIUS`)
    }
    else
    {
     alert("Pleas check any one");
    }
    }
    
};
document.getElementById("reset").onclick=function del()
{
    document.getElementById("Temperature").value="";
    document.getElementById("cel").checked=false;
    document.getElementById("feh").checked=false;
    document.getElementById("h1").innerText="";
}
