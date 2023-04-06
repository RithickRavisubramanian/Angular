let countdown=30;
let interval;
function update()
{
    document.getElementById("timer").innerHTML=countdown;
    if(countdown===0)
    {
        clearInterval(interval);
        display();
        document.getElementById("timer").innerHTML="Congratulationssssss";
    }
  
    else{
       countdown--;
    }
    
}
function display()
    {
        document.getElementById("gif").src="firework.gif";
        document.getElementById("gif").style.display="block";
    }
interval=setInterval(update,1000)