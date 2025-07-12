document.getElementById("submit").onclick=function()
{ 
    let d=document.getElementById("op");
   const yescheck=document.getElementById("Yes").checked;//checked is a boolean
   const nocheck=document.getElementById("no").checked;
   if(yescheck && nocheck)
   {
    alert("Please check only one");
    d.innerText=("Please check only one");
  
   }
   else if(!yescheck && !nocheck)
    
   {
    alert("Please enter any one input");
    d.innerText=("Please check any one input");
   }
   else if(yescheck)
   {
    alert("YOU checked :YES");
   d.innerText=("YOU checked :YES");
   }
   else if(nocheck)
   {
    alert("you checked :NO");
    d.innerText=("you checked :NO");
   }
};