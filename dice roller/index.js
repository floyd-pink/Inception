function dice(){
    let num=document.getElementById("num").value;
    let images =document.getElementById("images");
    let display=document.getElementById("display");
    let d=[];
    let I=[];
    let n=[];//id  of roll dice
    if(num==0||num<1)
    {
      display.innerText="Please Enter at least 1 dice";
    images.innerHTML="";
    alert("NULL input Not Accepted");
      return;
    }

 
    for(let i=1;i<=num;i++)
    {
        let roller=Math.floor(Math.random()*6 ) +1;
        d.push(roller);
        I.push(`<img src ="dice_images/${roller}.png">`);
    
    }

    display.innerText =`Dice :${d.join(', ')}`;
    images.innerHTML=I.join('');
    
}
function reset()
{
      let num=document.getElementById("num");
    let images =document.getElementById("images");
    let display=document.getElementById("display");
    num.value="";
    images.textContent="";
    display.innerText="";
}
