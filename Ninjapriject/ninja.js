
const correctAnswers=['B','A','B','B'];
const form=document.querySelector('.quzi-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e =>{
 e.preventDefault();
 
let score=0;
const useranswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
   
      useranswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score +=10;
           }
         });
      // console.log(score);
      
      scrollTo(0,0);
    //   result.querySelector('span').textContent=`${score}%`;
      result.classList.remove('d-none');

      let output=0;

      const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
      },100);
})