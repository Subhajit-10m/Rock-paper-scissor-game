let userscore=0;
let computerscore=0;
const choices = document.querySelectorAll(".selection");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const computerscorepara=document.querySelector("#computerscore");



const gencompchoice=()=>{
    const options=["rock", "paper", "scissors"];
    const ranidx=  Math.floor(Math.random()*3);
    return options[ranidx];
}

const drawgame=()=>{
    console.log("game was draw");
     msg.innerHTML="Draw ! play again";
      msg.style.backgroundColor = "#cbc0d3";
};
  const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML=userscore;
        console.log("you win");
        msg.innerHTML="you win";
       msg.style.backgroundColor = "#fff3b0";

  
     }
       else{
        computerscore++;
        computerscorepara.innerHTML=computerscore;
        console.log("you lost ");
         msg.innerHTML="you lost";
          msg.style.backgroundColor = "#ff8fa3";
        
       }

  }

const playgame =(userselection)=>{
    console.log("userchoice=",userselection);
    const compchoice= gencompchoice();
     console.log("comptry=",compchoice);

     if (userselection === compchoice) {
    drawgame();
} else {
    let userwin=true;
    if(userselection==="rock"){
        userwin = compchoice==="paper"? false : true;
    } else if(
        userselection==="paper"){
            userwin=compchoice==="scissors" ? false : true;
        }
        else{
            userwin=compchoice==="rock" ? false: true;
        }
        showwinner(userwin);
  };
  };

choices.forEach((selection) => {
    console.log(selection);
     selection.addEventListener("click",()=>{
        const userselection=selection.getAttribute("id");
       
        playgame(userselection)
     

    });
    });


    
    