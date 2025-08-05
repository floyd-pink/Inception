const Choices=["Rock","Paper","Scissors"];
const player_display=document.getElementById("Player");
const computer_display=document.getElementById("Computer");
const result_display=document.getElementById("result");
let player_win_count=0;
let computer_win_count=0;
const Player_history=document.getElementById("player_history");
const Computer_history=document.getElementById("computer_history");
function startgame(parameter)
{
  let result="";
  let computer_option=Math.floor(Math.random()* 3)  ;
  let computer_decision=Choices[computer_option];
  console.log(`Computer decision ${computer_decision}`);
  console.log(`player decision ${parameter}`)
player_display.innerText = `Player: ${parameter}`;
computer_display.innerText = `Computer: ${computer_decision}`;


  if(computer_decision===parameter)
  {
    result="It's a Tie";
  }
  else{
    switch(parameter)
    {
      case "Rock":
        result=(computer_decision==="Paper")? "You lose" : "You win";
        break
      case "Scissors":
        result=(computer_decision==="Rock")? "You lose" : "You win";
        break
        case "Paper":
          result=(computer_decision==="Rock")? "You win" : "You lose";
          break
    }
  }
  result_display.innerText=result;
  if(result==="You win")
  {
    player_win_count++;
  }
  else if (result==="You lose"){
    computer_win_count++;
  }
  Player_history.innerText=`Player Wins: ${player_win_count}`;
 Computer_history.innerText=`Computer Wins: ${computer_win_count}`;
 result_display.style.color=(result==="You win")? "green" : (result==="You lose")? "red" :"grey";//ternary operator
  }