document.getElementById("generate").onclick=function e()
{
const lower=document.getElementById("lowercase").checked;
const upper=document.getElementById("uppercase").checked;
const numbers=document.getElementById("numbers").checked;
const symbols=document.getElementById("symbols").checked;
const length=document.getElementById("length").value;
const password=gen(lower,upper,numbers,symbols,length);
console.log(password);
document.getElementById("h1").innerText=password;
};
function gen(lower,upper,numbers,symbols,length)
{
    const includeUppercases=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const includeLowercase=("abckdefghijlmnopqrstuvwxyz");
    const includeNumbers=("0123456789");
    const includeSymbols=("!@#$%^&*()_-+=");

    let permissionCharacter="";//now inserting vallues which user wants;
   let password="";
    
    permissionCharacter+= lower? includeLowercase : ""; //This are asked to user using check box
    permissionCharacter+= upper? includeUppercases : "";
    permissionCharacter+= numbers? includeNumbers : "";
    permissionCharacter+= symbols? includeSymbols : "";
   
    if(length<=0)
    {
        alert(`please Enter any number`);
        return "";
    }
    if(permissionCharacter.length===0){
        alert(`Please check any one box `);
        return "";
    }
   

    for(let i=0;i<length;i++)//loop until Length of password 
    {
        const randomNumber=Math.floor(Math.random() * permissionCharacter.length );//Here we are generatig random index 
        password += permissionCharacter[randomNumber];//
    }
    return password;
  
}

document.getElementById("reset").onclick=function res()
{
    document.getElementById("lowercase").checked=false;
document.getElementById("uppercase").checked=false;
document.getElementById("numbers").checked=false;
document.getElementById("symbols").checked=false;
document.getElementById("length").value="0";
document.getElementById("h1").innerText="";

   
}