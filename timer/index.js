let [seconds,minutes,hours]=[0,0,0];
let display=document.getElementById("display");
let timer=null;
function clock(){
    seconds++;
    if(seconds==60)
        {
            seconds=0;
           minutes++;
        }
           if(minutes==60)
            {
                minutes=0;
                hours++;
            }
            let h=hours.toString().padStart(2,"0");
            let m=minutes.toString().padStart(2,"0");
            let sec=seconds.toString().padStart(2,"0");
          
        display.innerText=`${h}:${m}:${sec}`;
}
function start()
{
    if(timer!=null)
    {
        clearInterval(timer);
    }
   timer= setInterval(clock,1000);
}
function pause()
{
    clearInterval(timer);
   

}
function reset()
{
     clearInterval(timer);
    
     [seconds,minutes,hours]=[0,0,0];
     display.innerText="00:00:00";
   
}



