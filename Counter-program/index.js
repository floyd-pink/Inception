const increase=document.getElementById("increase");/* user le increase button  click garesi yo run hunxa */
const reset=document.getElementById("reset");
 const decrease=document.getElementById("decrease");
 const Clabel=document.getElementById("clabel");
let c=0;

increase.onclick=function() //tespaxi maile yo callgarye
{ if (c < 10) {
    c++;
    Clabel.textContent = c;
    if (c === 10) {
        alert(`YOU are at your maximum limit of ${c}`);
    }
} else {
    alert("Sorry, can't go above 10");
}

}

    
decrease.onclick=function()
{
if(c>0){
        c--;
    Clabel.textContent=c;
    }
   else
   {
    window.alert("Soory can't go below 0");
    
   }
}
reset.onclick=function()
{
    c=0;
    Clabel.textContent=c;

}
