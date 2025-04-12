const rolldice=document.querySelector('.rolldice');
const dice =document.querySelector('.dice');
const currentscore0 = document.getElementById('currentscore0');
const currentscore1 = document.getElementById('currentscore1');
const holdbtn=document.getElementById('holdbtn');

let score1=0;
let activeplayer=0;
let prescore =0;
const imgnum={
   "1": "images/1.png",
   "2": "images/2.png",
   "3": "images/3.png",
   "4": "images/4.png",
   "5": "images/5.png",
   "6": "images/6.png"

};

  rolldice.addEventListener('click',function(){
    // e.preventDefault();
    let num =Math.floor(Math.random()*6)+1;

    if(num !== 1){
        score1 +=num;
        document.getElementById(`currentscore${activeplayer}`).textContent=score1;
       
       
    }else{
        document.getElementById(`currentscore${activeplayer}`).textContent=0;
        score1=0;
        activeplayer = activeplayer === 0 ? 1 : 0;
    }
    
   
   
    let imgsrc=imgnum[num];
    dice.src=imgsrc;
    // console.log(num);
    dice.style.display='block';
    
    if( score1 > 30 && activeplayer === 1){
      alert(`game over and the winner is player${activeplayer + 1}`);
      document.getElementById(`finalscore${activeplayer}`).textContent = 0;
      location.reload();
    }else if( score1 > 30 && activeplayer === 0){
      alert(`game over and the winner is player${activeplayer + 1}`);
      document.getElementById(`finalscore${activeplayer}`).textContent = 0;
      location.reload();
    }
    
    
});
 

holdbtn.addEventListener('click', e =>{
    e.preventDefault();
   
   prescore = Number(document.getElementById(`finalscore${activeplayer}`).textContent);
   document.getElementById(`finalscore${activeplayer}`).textContent = Number(document.getElementById(`currentscore${activeplayer}`).textContent) + Number(prescore)
   
   if(document.getElementById(`finalscore${activeplayer}`).textContent > 30 && activeplayer === 1){
    alert(`game over and the winner is player${activeplayer + 1}`);
    document.getElementById(`finalscore${activeplayer}`).textContent = 0;
  }else if(document.getElementById(`finalscore${activeplayer}`).textContent > 30 && activeplayer === 0){
    alert(`game over and the winner is player${activeplayer + 1}`);
    document.getElementById(`finalscore${activeplayer}`).textContent = 0;

 }
   
    score1=0;
    document.getElementById(`currentscore${activeplayer}`).textContent = 0;
    dice.style.display='none';
    activeplayer = activeplayer === 0 ? 1 : 0;
});

document.querySelector('.newgame').addEventListener('click', function() {
    location.reload();
});


