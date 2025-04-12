const guessnum=document.querySelector('.Guess');

const checkbtn = document.querySelector('.check');

const randomnum = document.querySelector('header .number');

const message= document.querySelector('.message');

const again = document.querySelector('button');

const Scoreresult = document.querySelector('.score');

const finalscore=document.querySelector('.high-score');
const body = document.querySelector('body');
let score= 20;
let highscore=0;
Scoreresult.textContent=score;
checkbtn.addEventListener('click',(e)=> {
    e.preventDefault();
    let guesnum = parseInt(guessnum.value);
    //  console.log(guesnum);
     let answer = Math.floor(Math.random() * 20) + 1;
   
     let ranum =answer;
     randomnum.textContent = ranum;
     guessnum.value = ''; 

     if(guesnum > answer){
         message.textContent= 'Too High';
     }else if(guesnum < answer){
        message.textContent = 'Too Low';
     }else {
        message.textContent = 'You Won';
     }
     

    
     if(guesnum !== answer){
       score--;
     }
  
    Scoreresult.textContent= score;

    if(guesnum === answer && score > highscore){
        highscore=score;
       finalscore.textContent=highscore;
       body.style.backgroundColor= 'green';
    }

    if(score <=0){
        message.textContent = 'Game Over';
        checkbtn.disabled = true;

    }
    
});

again.addEventListener('click', e =>{
    e.preventDefault();
    location.reload();
    
})